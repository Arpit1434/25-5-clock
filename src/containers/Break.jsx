import { connect } from 'react-redux';
import {
  incrementBreakLength,
  decrementBreakLength,
  resetBreak,
} from '../actions';
import Break from '../components/Break';

const mapStateToProps = (state) => ({
  break: state.break,
  control: state.control,
});

const mapDispatchToProps = (dispatch) => ({
  incrementBreakLength: () => {
    dispatch(incrementBreakLength());
  },
  decrementBreakLength: () => {
    dispatch(decrementBreakLength());
  },
  resetBreak: () => {
    dispatch(resetBreak());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
