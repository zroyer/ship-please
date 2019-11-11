import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchValidateAddress } from '~/src/actions';
import useAddStopForm from '~/src/hooks/useAddStopForm';
import validateAddStopForm from '~/src/util/validateAddStopForm';
import Header from '~/src/components/Header/index';
import InputGroup from '~/src/components/InputGroup/index';
import Button from '~/src/components/Button/index';
import './AddStopForm.less';

function AddStopForm({ dispatch, isLoading }) {
  const {
    values,
    formErrors,
    handleSubmit,
    handleChange,
  } = useAddStopForm(onAddStop, validateAddStopForm);

  async function onAddStop() {
    const formValues = values;
    return dispatch(fetchValidateAddress({
      name: formValues.name,
      address: formValues.address,
    }));
  }

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
  )
}

AddStopForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.boolean.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.shipments.isLoading,
});

export default connect(mapStateToProps)(AddStopForm);
