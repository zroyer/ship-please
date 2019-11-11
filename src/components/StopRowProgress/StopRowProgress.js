import React from 'react';
import PropTypes from 'prop-types';
import './StopRowProgress.less';

const StopRowProgress = ({ numStop, completed }) => (
  <div className={`StopRowProgress ${completed ? 'complete' : ''}`}>
    <div className='StopRowProgressBadge'>
      <span className='stopRowProgressBadgeStop'>{numStop}</span>
    </div>
    <div className={`StopRowProgressBar ${numStop === 1 ? 'hidden' : ''}`} />
  </div>
);

StopRowProgress.propTypes = {
  numStop: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default StopRowProgress;
