import { connect } from 'react-redux';
import { playControl, pauseControl, resetControl } from '../actions';
import Controls from '../components/Controls';

const mapStateToProps = (state) => ({
  control: state.control,
});

const mapDispatchToProps = (dispatch) => ({
  playControl: () => {
    dispatch(playControl());
  },
  pauseControl: () => {
    dispatch(pauseControl());
  },
  resetControl: () => {
    dispatch(resetControl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
