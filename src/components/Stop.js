import React from 'react'
import PropTypes from 'prop-types'

const Stop = ({
  onToggleComplete,
  onDeleteStop,
  completed,
  name,
  address,
}) => (
  <>
    <div
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name} | {address}
    </div>
    <button onClick={onDeleteStop}>Delete</button>
    <input type='checkbox' onClick={onToggleComplete}/>
  </>
)

Stop.propTypes = {
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteStop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

export default Stop
