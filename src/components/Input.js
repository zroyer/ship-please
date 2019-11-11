import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className,
  name,
  value,
  onChange,
  onKeyDown,
  onBlur,
  isMultiline,
}) => {
  return isMultiline
    ? (
      <textarea
        className={`Input ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autocomplete='off'
      />
    ) : (
      <input
        className={`Input ${className}`}
        name={name}
        type='text'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        autocomplete='off'
      />
    )
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  isMultiline: PropTypes.bool,
};

export default Input;
