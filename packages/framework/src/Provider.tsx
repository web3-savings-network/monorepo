import React, { ReactNode, useContext, useEffect, useReducer } from 'react';

import { reducer } from './state';
import ChanceCardsContext from './Context';

export interface ChanceCardsProviderProps {
  className?: string;
  children: ReactNode;
}

function ChanceCardsProvider({
  children
}: ChanceCardsProviderProps): JSX.Element {
  const initialState = useContext(ChanceCardsContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => { 
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && user.authToken) {
      dispatch({ type: 'SET_IS_SIGNED_IN', payload: true })
    } 
  }, [])

  return (
    <ChanceCardsContext.Provider value={{
      ...state,
      setIsSignedIn: () => dispatch({ type: 'SET_IS_SIGNED_IN', payload: true }),
    }}>
        {children}
    </ChanceCardsContext.Provider>
  );
}

export default ChanceCardsProvider;
