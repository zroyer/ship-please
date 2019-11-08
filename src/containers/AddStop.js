import React, { useState } from 'react';
import { connect } from 'react-redux';
import useAddStop from "./useAddStop";
import { addStop } from '../actions';
import validate from '../util/validate';

function AddStop({ dispatch }) {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  } = useAddStop(onAddStop, validate);

  async function onAddStop() {
    const validAddress = await getValidAddress(values.address);
    if (validAddress.error) {
      setErrors({
        ...errors,
        address: 'Invalid address!'
      });
    }
    else {
      dispatch(addStop({
        name: values.name,
        address: validAddress.geocoded_address.formatted_address,
      }));
      setValues({});
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
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={values.name || ''}
          onChange={handleChange}
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
          value={values.address || ''}
          onChange={handleChange}
        />
        {errors.address && (
          <div>{errors.address}</div>
        )}
      </div>
      <button onClick={handleSubmit}>
        Add
      </button>
    </form>
  )
}

export default connect()(AddStop);
