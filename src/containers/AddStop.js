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

  const onClickAdd = async (e) => {
    e.preventDefault();
    const validAddress = await getValidAddress(stopValues.address);

    if (validAddress.error) {
      console.log('uh oh')
      console.log(validAddress.error);
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

  const handleOnChange = (e) => {
    e.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setStopValues({
      ...stopValues,
      [inputName]: inputValue,
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
