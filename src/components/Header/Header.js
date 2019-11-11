import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ content, className }) => (
  <div className={`Header ${className}`}>
    {content}
  </div>
);

Header.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Header;
