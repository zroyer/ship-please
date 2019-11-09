import React from 'react'
import PropTypes from 'prop-types'

const handleKeyPress = (e) => {
  if (e.keyCode === 13) {
   e.target.blur();
  }
}

const Stop = ({
  numStop,
  onToggleComplete,
  onEditStop,
  onDeleteStop,
  completed,
  name,
  address,
}) => (
  <div className='StopRow'>
    <div className='StopRowTopActions'>
      <div className='StopRowTopActionsLeft'>
        <input
          type='checkbox'
          className='checkbox'
          onClick={onToggleComplete}
        />
        <span className='StopRowLabel'>Stop {numStop}: {completed ? 'Complete' : 'Incomplete'}</span>
      </div>
      <button onClick={onDeleteStop}>Delete</button>
    </div>
    <input
      className='StopRowInput'
      value={name}
      name='name'
      onChange={(e) => onEditStop(e)}
      onKeyDown={(e) => handleKeyPress(e)}
    />
    <textarea
      className='StopRowTextarea'
      value={address}
      name='address'
      onChange={(e) => onEditStop(e)}
      onKeyDown={(e) => handleKeyPress(e)}
    />
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
