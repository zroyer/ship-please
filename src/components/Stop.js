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
  <div className='StopRow'>
    <div className='StopRowLabel'>
      Stop {numStop}:
    </div>
    <div>
      <input
        className='StopInput'
        value={name}
      />
    </div>
    <div>
      <input
        className='StopInput'
        value={address}
      />
    </div>
    <button onClick={onDeleteStop}>Delete</button>
    <input
      type='checkbox'
      className='checkbox'
      onClick={onToggleComplete}
    />
    {completed && (
      <span>Completed!</span>
    )}
  </div>
)

Stop.propTypes = {
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteStop: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}

export default Stop
