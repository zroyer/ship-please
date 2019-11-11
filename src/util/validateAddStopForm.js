export default function validateAddStopForm(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.address) {
    errors.address = 'Address is required';
  } else if (values.address.length < 3) {
    errors.address = 'Address must be at least 3 characters';
  }
  return errors;
}
