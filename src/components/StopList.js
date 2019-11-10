import React from 'react';
import PropTypes from 'prop-types';
import Stop from './Stop';
import Header from './Header';

const StopList = ({ stops, toggleStop, editStop, deleteStop }) => (
  <div className='StopList'>
    <Header
      content={stops.length > 0
        ? 'Itinerary'
        : 'No stops yet!'
      }
      className={`${stops.length > 0 ? 'hasStops' : ''}`}
    />
    {stops.map((stop, index) =>
      <Stop
        numStop={index + 1}
        key={stop.id}
        onToggleComplete={() => toggleStop(stop.id)}
        onEditStop={(values) => editStop({
          id: stop.id,
          newValues: values,
        })}
        onDeleteStop={() => deleteStop(stop.id)}
        {...stop}
      />
    )}
  </div>
);

StopList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleStop: PropTypes.func.isRequired,
  editStop: PropTypes.func.isRequired,
  deleteStop: PropTypes.func.isRequired
}

export default StopList;
