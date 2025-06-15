import { connect } from 'react-redux';
import {
  toggleTimerMode,
  resetTimerMode,
  decrementTimeLeft,
  setTimeLeft,
  resetTimeLeft,
  pauseControl,
} from '../actions';
import Timer from '../components/Timer';

const mapStateToProps = (state) => ({
  break: state.break,
  session: state.session,
  timerMode: state.timerMode,
  timeLeft: state.timeLeft,
  control: state.control,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTimerMode: () => {
    dispatch(toggleTimerMode());
  },
  resetTimerMode: () => {
    dispatch(resetTimerMode());
  },
  decrementTimeLeft: (time) => {
    dispatch(decrementTimeLeft(time));
  },
  setTimeLeft: (time) => {
    dispatch(setTimeLeft(time));
  },
  resetTimeLeft: () => {
    dispatch(resetTimeLeft());
  },
  pauseControl: () => {
    dispatch(pauseControl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
