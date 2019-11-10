import React, { useState } from 'react';
import { connect } from 'react-redux';
import useAddStop from "./useAddStop";
import { addStop } from '../actions';
import validate from '../util/validate';
import Title from '../components/Title';
import Input from '../components/Input';

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
    const formValues = values;
    const validAddress = await getValidAddress(formValues.address);
    if (validAddress.error) {
      setErrors({
        ...errors,
        address: 'Invalid address!'
      });
    }
    else {
      dispatch(addStop({
        name: formValues.name,
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
    <form
      onSubmit={handleSubmit}
      className='AddStop'
      noValidate
    >
      <Title
        content='Add a stop'
        className='addStopTitle'
      />
      <div className='addStopInputGroup'>
        <div className='addStopInputLabel'>
          Name
        </div>
        <Input
          className='addStopInput'
          type='text'
          name='name'
          value={values.name || ''}
          onChange={handleChange}
        />
        {errors.name && (
          <div className='inputError'>{errors.name}</div>
        )}
      </div>
      <div className='addStopInputGroup'>
        <div className='addStopInputLabel'>
          Address
        </div>
        <Input
          className='addStopInput'
          type='text'
          name='address'
          value={values.address || ''}
          onChange={handleChange}
        />
        {errors.address && (
          <div className='inputError'>{errors.address}</div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className='addStopSubmitBtn'
      >
        Add
      </button>
    </form>
  )
}

export default connect()(AddStop);
