import { useState, useEffect } from 'react';

const useAddStopForm = ({
  onAddStop,
  validateAddStopForm,
  isLoading,
  apiError,
}) => {
  const [values, setValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      onAddStop().then(() => {
        setIsSubmitting(false);
      });
    }
  }, [formErrors]);

  useEffect(() => {
    if (isSubmitting && !isLoading) {
      if (apiError) {
        setFormErrors({
          ...formErrors,
          address: apiError,
        });
      } else {
        setValues({});
      }
    }
  }, [isLoading]);

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
