import React from 'react';
import PropTypes from 'prop-types';
import Stop from '~/src/components/Stop';
import Header from '~/src/components/Header';
import './StopList.less';

const StopList = ({ stops, toggleComplete, editStop, deleteStop }) => (
  <div className='StopList'>
    <Header
      content={stops.length > 0 ? 'Itinerary' : 'No stops yet!'}
      className={`${stops.length > 0 ? 'itinerary' : ''}`}
    />
    {stops.map((stop, index) => (
      <Stop
        id={stop.id}
        completed={stop.completed}
        name={stop.name}
        address={stop.address}
        numStop={index + 1}
        key={stop.id}
        onToggleComplete={() => toggleComplete(stop.id)}
        onEditStop={(value) =>
          editStop({
            id: stop.id,
            newValue: value,
          })
        }
        onDeleteStop={() => deleteStop(stop.id)}
      />
    ))}
  </div>
);

StopList.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  editStop: PropTypes.func.isRequired,
  deleteStop: PropTypes.func.isRequired,
};

export default StopList;
