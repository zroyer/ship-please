import React, { useState } from 'react';
import { connect } from 'react-redux';
import useAddStop from "./useAddStop";
import { addStop } from '../actions';
import validate from '../util/validate';
import Header from '../components/Header';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';

function AddStop({ dispatch }) {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleSubmit,
    handleChange,
    isSubmitting,
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
      <Header
        content='Add a stop'
        className='addStopHeader'
      />
      <InputGroup
        label='Name'
        inputName='name'
        inputValue={values.name || ''}
        error={errors.name || ''}
        onChange={handleChange}
      />
      <InputGroup
        label='Address'
        inputName='address'
        inputValue={values.address || ''}
        error={errors.address || ''}
        onChange={handleChange}
      />
      <Button
        content={isSubmitting ? 'Adding...' : 'Add'}
        className='addStopSubmitBtn'
        onClick={handleSubmit}
        disabled={isSubmitting}
      />
    </form>
  )
}

export default connect()(AddStop);
