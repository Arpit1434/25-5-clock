export const incrementBreakLength = () => {
  return {
    type: 'BREAK_INCREMENT',
  };
};

export const decrementBreakLength = () => {
  return {
    type: 'BREAK_DECREMENT',
  };
};

export const resetBreak = () => {
  return {
    type: 'RESET_BREAK',
  };
};

export const incrementSessionLength = () => {
  return {
    type: 'SESSION_INCREMENT',
  };
};

export const decrementSessionLength = () => {
  return {
    type: 'SESSION_DECREMENT',
  };
};

export const resetSession = () => {
  return {
    type: 'RESET_SESSION',
  };
};

export const toggleTimerMode = () => {
  return {
    type: 'TOGGLE_MODE',
  };
};

export const resetTimerMode = () => {
  return {
    type: 'RESET_MODE',
  };
};

export const playControl = () => {
  return {
    type: 'PLAY_CONTROL',
  };
};

export const pauseControl = () => {
  return {
    type: 'PAUSE_CONTROL',
  };
};

export const resetControl = () => {
  return {
    type: 'RESET_CONTROL',
  };
};

export const decrementTimeLeft = () => {
  return {
    type: 'DECREMENT_TIME_LEFT',
  };
};

export const setTimeLeft = (time) => {
  return {
    type: 'SET_TIME_LEFT',
    time,
  };
};

export const resetTimeLeft = () => {
  return {
    type: 'RESET_TIME_LEFT',
  };
};
