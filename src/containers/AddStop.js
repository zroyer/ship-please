import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStop } from '../actions'

function AddStop({ dispatch }) {
  const [stopValues, setStopValues] = useState({
    name: '',
    address: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    address: '',
  });

  const validateForm = () => {
    const nameError = stopValues.name.trim().length === 0
      ? 'Required!'
      : ''
    const addressError = stopValues.address.trim().length === 0
      ? 'Required!'
      : stopValues.address.trim().length < 3
        ? 'Mininum 3 characters!'
        : ''

    console.log(!nameError && !addressError)

    setErrors({
      name: nameError,
      address: addressError,
    });
    return !nameError && !addressError;
  }

  const onAddStop = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log(isValid);
    if (isValid) {
      console.log('should be valid here');
      const validAddress = await getValidAddress(stopValues.address);
      if (validAddress.error) {
        setErrors({
          ...errors,
          address: 'Invalid address!'
        });
      }
      else {
        dispatch(addStop({
          name: stopValues.name,
          address: validAddress.geocoded_address.formatted_address,
        }));
        setStopValues({
          name: '',
          address: '',
        });
      }
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setStopValues({
      ...stopValues,
      [inputName]: inputValue,
    });

    if (errors.name || errors.address) {
      validateForm();
    }
  }

  const getValidAddress = async (address) => {
    const addressValidation = await fetch(
      'https://dev-api.shipwell.com/v2/locations/addresses/validate/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({formatted_address: address}),
    });

    return addressValidation.json();
  };

  return (
    <form onSubmit={onAddStop}>
      <div>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={stopValues.name}
          onChange={handleOnChange}
        />
        {errors.name && (
          <div>{errors.name}</div>
        )}
      </div>
      <div>
        <input
          type='text'
          name='address'
          placeholder='Address'
          value={stopValues.address}
          onChange={handleOnChange}
        />
        {errors.address && (
          <div>{errors.address}</div>
        )}
      </div>
      <button onClick={onAddStop}>
        Add
      </button>
    </form>
  )
}

export default connect()(AddStop);
