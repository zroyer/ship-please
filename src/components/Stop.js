import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Stop ({
  numStop,
  onToggleComplete,
  onEditStop,
  onDeleteStop,
  completed,
  name,
  address,
}) {
  const [editValues, setEditValues] = useState({
    name: name,
    address: address,
  });

  const handleChange = (e) => {
    const newValues = {
      ...editValues,
      [e.target.name]: e.target.value,
    }
    setEditValues(newValues);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      const newValues = {...editValues};
      onEditStop(newValues);
      e.target.blur();
    }
  }

  const handleOnBlur = (e) => {
    e.preventDefault();
    const newValues = {...editValues};
    onEditStop(newValues);
  }

  return (
    <div className='StopRow'>
      <div className='StopRowTopActions'>
        <div className='StopRowTopActionsLeft'>
          <label className="container">
            <input
              type="checkbox"
              onClick={onToggleComplete}
            />
            <span className="checkmark"/>
          </label>
          <span className='StopRowLabel'>
            {
              `Stop ${numStop}: `
            }
            <span className={`StopRowLabelValue ${completed ? 'completed' : ''}`}>
              {completed ? 'Complete' : 'Incomplete'}
            </span>
          </span>
        </div>
        <button onClick={onDeleteStop}>Delete</button>
      </div>
      <input
        className='StopRowInput'
        value={editValues.name}
        name='name'
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyPress(e)}
        onBlur={(e) => handleOnBlur(e)}
      />
      <textarea
        className='StopRowTextarea'
        value={editValues.address}
        name='address'
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyPress(e)}
        onBlur={(e) => handleOnBlur(e)}
      />
    </div>
  )
}

Stop.propTypes = {
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteStop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

export default Stop
