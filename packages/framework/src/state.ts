
export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'IS_READY':
      return {
        ...state,
        isReady: action.payload,
      };
    case 'SET_IS_SIGNED_IN':
      return {
        ...state,
        isSignedIn: action.payload,
      };
    default:
      return state;
  }
}

export function reducerObserver(draft: any, action: any) {
  switch (action.type) {
    case 'SET_PROVIDER_OBSERVER':
      return draft;
    default:
      return draft;
  }
}

export default {
  reducerMultiChain: reducer,
  reducerObserver: reducerObserver,
};
