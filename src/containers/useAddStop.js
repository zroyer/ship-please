import { useState, useEffect } from 'react';

const useAddStop = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
      setIsSubmitting(false);
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    }
    setValues(newValues);
    setErrors({
      ...errors,
      [e.target.name]: validate(newValues)[e.target.name],
    });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleSubmit,
    handleChange,
    isSubmitting,
  }
};

export default useAddStop;
