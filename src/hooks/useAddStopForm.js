import { useState, useEffect } from 'react';
import {
  FETCH_ADDRESS_SUCCESS,
} from '~/src/actions/index';

const useAddStopForm = (onAddStop, validateAddStopForm) => {
  const [values, setValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      onAddStop()
        .then((response) => {
          setIsSubmitting(false);
          if (response.type === FETCH_ADDRESS_SUCCESS) {
            setValues({});
          }
          else {
            setFormErrors({
              address: 'Invalid address!',
            });
          }
        });
    }
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateAddStopForm(values));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
    setFormErrors({
      ...formErrors,
      [e.target.name]: validateAddStopForm(newValues)[e.target.name],
    });
  };

  return {
    values,
    setValues,
    formErrors,
    handleSubmit,
    handleChange,
  };
};

export default useAddStopForm;
