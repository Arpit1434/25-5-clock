const initialState = 25 * 60;

const timeLeftReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT_TIME_LEFT':
      return state - 1;
    case 'SET_TIME_LEFT':
      return action.time;
    case 'RESET_TIME_LEFT':
      return initialState;
    default:
      return state;
  }
};

export default timeLeftReducer;
