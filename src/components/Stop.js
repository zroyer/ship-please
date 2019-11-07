import React from 'react'
import PropTypes from 'prop-types'

const Stop = ({ onClick, completed, text }) => (
  <div
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </div>
)

Stop.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Stop
