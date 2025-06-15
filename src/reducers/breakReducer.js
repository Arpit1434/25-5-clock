const initialState = 5;

const breakReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BREAK_INCREMENT':
      return state < 60 ? state + 1 : state;
    case 'BREAK_DECREMENT':
      return state > 1 ? state - 1 : state;
    case 'RESET_BREAK':
      return initialState;
    default:
      return state;
  }
};

export default breakReducer;
