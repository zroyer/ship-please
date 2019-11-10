import React from 'react'
import PropTypes from 'prop-types'
import Stop from './Stop'

const Title = ({ content, className }) => (
  <div className={`Title ${className}`}>
    {content}
  </div>
);

Title.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Title;
