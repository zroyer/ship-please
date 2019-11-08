import { connect } from 'react-redux'
import { toggleStop, deleteStop } from '../actions'
import StopList from '../components/StopList'
import { VisibilityFilters } from '../actions'

const mapStateToProps = state => ({
  stops: state.stops,
})

const mapDispatchToProps = dispatch => ({
  toggleStop: id => dispatch(toggleStop(id)),
  deleteStop: id => dispatch(deleteStop(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopList)
