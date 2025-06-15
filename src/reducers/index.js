import { combineReducers } from 'redux';
import breakReducer from './breakReducer';
import sessionReducer from './sessionReducer';
import timerModeReducer from './timerModeReducer';
import timeLeftReducer from './timeLeftReducer';
import controlReducer from './controlReducer';

const rootReducer = combineReducers({
  break: breakReducer,
  session: sessionReducer,
  timerMode: timerModeReducer,
  timeLeft: timeLeftReducer,
  control: controlReducer,
});

export default rootReducer;
