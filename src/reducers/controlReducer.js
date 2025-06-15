const controlReducer = (state = 'PAUSE', action) => {
  switch (action.type) {
    case 'PLAY_CONTROL':
      return 'PLAY';
    case 'PAUSE_CONTROL':
      return 'PAUSE';
    case 'RESET_CONTROL':
      return 'RESET';
    default:
      return state;
  }
};

export default controlReducer;
