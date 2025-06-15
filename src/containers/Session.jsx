import { connect } from 'react-redux';
import {
  incrementSessionLength,
  decrementSessionLength,
  resetSession,
} from '../actions';
import Session from '../components/Session';

const mapStateToProps = (state) => ({
  session: state.session,
  control: state.control,
});

const mapDispatchToProps = (dispatch) => ({
  incrementSessionLength: () => {
    dispatch(incrementSessionLength());
  },
  decrementSessionLength: () => {
    dispatch(decrementSessionLength());
  },
  resetSession: () => {
    dispatch(resetSession());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
