import uuidv4 from 'uuid';
import { getValidAddress } from '~/src/services/shipwellService';

export const FETCH_ADDRESS_BEGIN = 'FETCH_ADDRESS_BEGIN';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_ERROR = 'FETCH_ADDRESS_ERROR';
export const EDIT_STOP_ACTION = 'EDIT_STOP_ACTION';
export const DELETE_STOP_ACTION = 'DELETE_STOP_ACTION';
export const COMPLETE_STOP_ACTION = 'COMPLETE_STOP_ACTION';

export const fetchAddressBegin = () => ({
  type: FETCH_ADDRESS_BEGIN,
});

export const fetchAddressSuccess = ({ name, address }) => ({
  type: FETCH_ADDRESS_SUCCESS,
  payload: {
    id: uuidv4(),
    name,
    address,
  },
});

export const fetchAddressError = ({ error }) => ({
  type: FETCH_ADDRESS_ERROR,
  payload: {
    error,
  },
});

export const editStop = ({ id, newValue }) => ({
  type: EDIT_STOP_ACTION,
  payload: {
    id,
    newValue,
  },
});

export const deleteStop = (id) => ({
  type: DELETE_STOP_ACTION,
  payload: {
    id,
  },
});

export const toggleComplete = (id) => ({
  type: COMPLETE_STOP_ACTION,
  payload: {
    id,
  },
});

export const fetchValidateAddress = ({ name, address }) => (dispatch) => {
  dispatch(fetchAddressBegin());
  return getValidAddress(address)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        dispatch(
          fetchAddressError({
            error: 'Invalid Address',
          }),
        );
      } else {
        dispatch(
          fetchAddressSuccess({
            name: name,
            address: data.geocoded_address.formatted_address,
          }),
        );
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
