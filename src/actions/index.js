import uuidv4 from 'uuid';

export const addStop = ({ name, address }) => ({
  type: 'ADD_STOP',
  id: uuidv4(),
  name,
  address,
});

export const editStop = ({ id, newValues }) => ({
  type: 'EDIT_STOP',
  id,
  newValues,
});

export const deleteStop = (id) => ({
  type: 'DELETE_STOP',
  id,
});

export const toggleComplete = (id) => ({
  type: 'COMPLETE_STOP',
  id,
});
