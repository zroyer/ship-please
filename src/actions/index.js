import uuidv4 from 'uuid';

export const ADD_STOP_ACTION = 'sp/actions/addStop';
export const EDIT_STOP_ACTION = 'sp/actions/editStop';
export const DELETE_STOP_ACTION = 'sp/actions/deleteStop';
export const COMPLETE_STOP_ACTION = 'sp/actions/toggleComplete';

export const addStop = ({ name, address }) => ({
  type: ADD_STOP_ACTION,
  id: uuidv4(),
  name,
  address,
});

export const editStop = ({ id, newValues }) => ({
  type: EDIT_STOP_ACTION,
  id,
  newValues,
});

export const deleteStop = (id) => ({
  type: DELETE_STOP_ACTION,
  id,
});

export const toggleComplete = (id) => ({
  type: COMPLETE_STOP_ACTION,
  id,
});
