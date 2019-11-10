import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, className, onClick }) => (
  <button className={`Button ${className}`}>
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
