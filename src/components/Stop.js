import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

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
  };

  const handleOnBlur = (e) => {
    e.preventDefault();
    const newValues = {...editValues};
    onEditStop(newValues);
  };

  return (
    <div className='StopRow'>
      <div className={`StopRowProgress ${completed ? 'complete': ''}`}>
        <div className='StopRowProgressBadge'>
          <span>{numStop}</span>
        </div>
        <div className={`StopRowProgressBar ${numStop === 1 ? 'hidden': ''}`} />
      </div>
      <div className='StopRowContent'>
        <Input
          className='StopRowInput'
          value={editValues.name}
          name='name'
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyPress(e)}
          onBlur={(e) => handleOnBlur(e)}
        />
        <Input
          className='StopRowTextarea'
          value={editValues.address}
          name='address'
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyPress(e)}
          onBlur={(e) => handleOnBlur(e)}
          isMultiline
        />
        <div className='StopRowActions'>
          <label className='container'>
            <span className='labelText'>Complete</span>
            <input
              type='checkbox'
              onClick={onToggleComplete}
            />
            <span className='checkmark'/>
          </label>
          <span className='StopRowDelete' onClick={onDeleteStop}>&#215;</span>
        </div>
      </div>
    </div>
  )
};

Stop.propTypes = {
  numStop: PropTypes.number.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onEditStop: PropTypes.func.isRequired,
  onDeleteStop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Stop;
