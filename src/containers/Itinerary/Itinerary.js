import { connect } from 'react-redux';
import { toggleComplete, editStop, deleteStop } from '~/src/actions';
import StopList from '~/src/components/StopList';

const mapStateToProps = (state) => ({
  stops: state.shipments.stops,
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
