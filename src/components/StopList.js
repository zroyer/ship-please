import React from 'react'
import PropTypes from 'prop-types'
import Stop from './Stop'

const StopList = ({ stops, toggleStop }) => (
  <ul>
    {stops.map(stop =>
      <Stop
        key={stop.id}
        {...stop}
        onClick={() => toggleStop(stop.id)}
      />
    )}
  </ul>
)

StopList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleStop: PropTypes.func.isRequired
}

export default StopList
