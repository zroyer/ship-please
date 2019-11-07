import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStop } from '../actions'

function AddStop({ dispatch }) {
  const [stopValues, setStopValues] = useState({
    name: '',
    address: '',
  });
  const [errors, setError] = useState({
    name: '',
    address: '',
  });

  const onClickAdd = (e) => {
    e.preventDefault();
    dispatch(
      addStop({
        name: stopValues.name,
        address: stopValues.address,
    }));
    setStopValues({
      name: '',
      address: '',
    });
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setStopValues({
      ...stopValues,
      [inputName]: inputValue,
    });
  }

  return (
    <div>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={stopValues.name}
        onChange={handleOnChange}
      />
      <div>Name Errors: </div>
      <input
        type='text'
        name='address'
        placeholder='Address'
        value={stopValues.address}
        onChange={handleOnChange}
      />
      <div>Address Errors: </div>
      <button onClick={onClickAdd}>
        Add
      </button>
    </div>
  )
}

export default connect()(AddStop);
