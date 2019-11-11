import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxGroup.less';

const CheckboxGroup = ({ onClick }) => (
  <label className='CheckboxGroup'>
    <span className='labelText'>Complete</span>
    <input
      type='checkbox'
      onClick={onClick}
    />
    <span className='checkmark'/>
  </label>
);

CheckboxGroup.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CheckboxGroup;
