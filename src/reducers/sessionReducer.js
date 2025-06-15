const initialState = 25;

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_INCREMENT':
      return state < 60 ? state + 1 : state;
    case 'SESSION_DECREMENT':
      return state > 1 ? state - 1 : state;
    case 'RESET_SESSION':
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
