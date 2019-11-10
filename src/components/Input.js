import React from 'react'
import PropTypes from 'prop-types'
import Stop from './Stop'

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
      />
    )
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.function,
  onKeyDown: PropTypes.function,
  onBlur: PropTypes.function,
  isMultiline: PropTypes.bool,
}

export default Input;
