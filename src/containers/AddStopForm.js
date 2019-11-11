import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useAddStopForm from '../hooks/useAddStopForm';
import { addStop } from '../actions';
import validateAddStopForm from '../util/validateAddStopForm';
import Header from '../components/Header';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';

function AddStopForm({ dispatch }) {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleSubmit,
    handleChange,
    isSubmitting,
  } = useAddStopForm(onAddStopForm, validateAddStopForm);

  async function onAddStopForm() {
    const formValues = values;
    return getValidAddress(formValues.address)
      .then((response) => {
        dispatch(addStop({
          name: formValues.name,
          address: response.geocoded_address.formatted_address,
        }));
        setValues({});
      })
      .catch((error) => {
        if(error && typeof(formatted_address) === 'undefined') {
          setErrors({
            ...errors,
            address: 'Invalid address!'
          });
        }
      });
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
      className='AddStopForm'
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

AddStopForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddStopForm);
