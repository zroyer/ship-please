import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const InputGroup = ({
  inputValue,
  inputName,
  label,
  error,
  onChange,
}) => (
  <div className='InputGroup'>
    <div className='InputGroupLabel'>
      {label}
    </div>
    <Input
      className='addStopInput'
      type='text'
      name={inputName}
      value={inputValue || ''}
      onChange={onChange}
    />
    {error && (
      <div className='InputGroupError'>{error}</div>
    )}
  </div>
)

InputGroup.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default InputGroup;
