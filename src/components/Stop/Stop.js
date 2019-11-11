import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '~/src/components/Input';
import StopRowProgress from '~/src/components/StopRowProgress';
import CheckboxGroup from '~/src/components/CheckboxGroup';
import './Stop.less';

function Stop({
  numStop,
  onToggleComplete,
  onEditStop,
  onDeleteStop,
  completed,
  name,
  address,
}) {
  const initialValues = {
    name: name,
    address: address,
  };
  const [editValues, setEditValues] = useState(initialValues);

  const handleChange = (e) => {
    const newValues = {
      ...editValues,
      [e.target.name]: e.target.value,
    };
    setEditValues(newValues);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const handleOnBlur = (e) => {
    e.preventDefault();
    if (editValues[e.target.name] !== initialValues[e.target.name]) {
      onEditStop({
        [e.target.name]: editValues[e.target.name],
      });
    }
  };

  return (
    <div className='StopRow'>
      <StopRowProgress numStop={numStop} completed={completed} />
      <div className='StopRowContent'>
        <Input
          className='StopRowInput'
          name='name'
          value={editValues.name}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleOnBlur}
        />
        <Input
          className='StopRowTextarea'
          name='address'
          value={editValues.address}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleOnBlur}
          isMultiline
        />
        <div className='StopRowActions'>
          <CheckboxGroup onClick={onToggleComplete} />
          <span className='StopRowDelete' onClick={onDeleteStop}>
            Delete
          </span>
        </div>
      </div>
    </div>
  );
}

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
