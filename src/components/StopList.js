import React from 'react'
import PropTypes from 'prop-types'
import Stop from './Stop'

const StopList = ({ stops, toggleStop, deleteStop }) => (
  <div className='StopList'>
    <div className={`StopListTitle ${stops.length > 0 ? 'hasStops' : ''}`}>
      {stops.length > 0
        ? 'Itinerary'
        : 'No stops yet!'
      }
    </div>
    {stops.map((stop, index) =>
      <Stop
        numStop={index + 1}
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
