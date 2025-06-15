const timerModeReducer = (state = 'SESSION', action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      if (state === 'SESSION') {
        return 'BREAK';
      } else {
        return 'SESSION';
      }
    case 'RESET_MODE':
      return 'SESSION';
    default:
      return state;
  }
};

export default timerModeReducer;
