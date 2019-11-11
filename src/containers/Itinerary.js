import { connect } from 'react-redux';
import { toggleComplete, editStop, deleteStop } from '../actions';
import StopList from '../components/StopList';

const mapStateToProps = (state) => ({
  stops: state.stops,
});

const mapDispatchToProps = (dispatch) => ({
  toggleComplete: (id) => dispatch(toggleComplete(id)),
  editStop: (id) => dispatch(editStop(id)),
  deleteStop: (id) => dispatch(deleteStop(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopList);
