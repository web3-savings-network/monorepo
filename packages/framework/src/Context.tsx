import { createContext } from 'react';

const ChanceCardsContext = createContext<{
  isReady: boolean;
  isSignedIn: boolean;
  setIsSignedIn: Function | null;
}>({
  isReady: false,
  isSignedIn: false,
  setIsSignedIn: null,
});

export default ChanceCardsContext;
