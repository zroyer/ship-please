import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ content, className, onClick }) => (
  <button type='submit' className={className} onClick={onClick}>
    {content}
  </button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
