import React from 'react'
import PropTypes from 'prop-types'
import Stop from './Stop'

const StopList = ({ stops, toggleStop, deleteStop }) => (
  <div>
    {stops.map(stop =>
      <Stop
        key={stop.id}
        {...stop}
        onToggleComplete={() => toggleStop(stop.id)}
        onDeleteStop={() => deleteStop(stop.id)}
      />
    )}
  </div>
)

StopList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleStop: PropTypes.func.isRequired,
  deleteStop: PropTypes.func.isRequired
}

export default StopList
