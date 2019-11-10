import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import StopRowProgress from './StopRowProgress';
import CheckboxGroup from './CheckboxGroup';

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
      <StopRowProgress
        numStop={numStop}
        completed={completed}
      />
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
          <CheckboxGroup
            onClick={onToggleComplete}
          />
          <span
            className='StopRowDelete'
            onClick={onDeleteStop}
          >
            Delete
          </span>
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
