import React from 'react'
import PropTypes from 'prop-types'

const Stop = ({
  numStop,
  onToggleComplete,
  onDeleteStop,
  completed,
  name,
  address,
}) => (
  <>
    <div>
      {numStop}) {name}
    </div>
    <div>
      {address}
    </div>
    <button onClick={onDeleteStop}>Delete</button>
    <input type='checkbox' onClick={onToggleComplete}/>
    {completed && (
      <span>Completed!</span>
    )}
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
