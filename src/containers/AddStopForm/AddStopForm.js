import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchValidateAddress } from '~/src/actions';
import useAddStopForm from '~/src/hooks/useAddStopForm';
import validateAddStopForm from '~/src/util/validateAddStopForm';
import Header from '~/src/components/Header';
import InputGroup from '~/src/components/InputGroup';
import Button from '~/src/components/Button';
import './AddStopForm.less';

function AddStopForm({ fetchValidateAddress, isLoading, apiError }) {
  const { values, formErrors, handleSubmit, handleChange } = useAddStopForm({
    onAddStop,
    validateAddStopForm,
    isLoading,
    apiError,
  });

  function onAddStop() {
    const formValues = values;
    return fetchValidateAddress({
      name: formValues.name,
      address: formValues.address,
    });
  }

  return (
    <form onSubmit={handleSubmit} className='AddStopForm' noValidate>
      <Header content='Add a stop' className='addStopHeader' />
      <InputGroup
        label='Name'
        inputName='name'
        onChange={handleChange}
        inputValue={values.name || ''}
        error={formErrors.name || ''}
      />
      <InputGroup
        label='Address'
        inputName='address'
        onChange={handleChange}
        inputValue={values.address || ''}
        error={formErrors.address || ''}
      />
      <Button
        content={isLoading ? 'Adding...' : 'Add'}
        className='addStopSubmitBtn'
        onClick={handleSubmit}
        disabled={isLoading}
      />
    </form>
  );
}

AddStopForm.propTypes = {
  fetchValidateAddress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  apiError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isLoading: state.shipments.isLoading,
  apiError: state.shipments.apiError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchValidateAddress: ({ name, address }) =>
    dispatch(fetchValidateAddress({ name, address })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStopForm);
