import { connect } from 'react-redux'
import { toggleStop } from '../actions'
import StopList from '../components/StopList'
import { VisibilityFilters } from '../actions'

const mapStateToProps = state => ({
  stops: state.stops,
})

const mapDispatchToProps = dispatch => ({
  toggleStop: id => dispatch(toggleStop(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StopList)
