let nextStopId = 0;

export const addStop = ({ name, address }) => ({
  type: 'ADD_STOP',
  id: nextStopId++,
  name,
  address,
});

export const editStop = ({ id, inputName, inputValue }) => ({
  type: 'EDIT_STOP',
  id,
  inputName,
  inputValue,
});

export const deleteStop = id => ({
  type: 'DELETE_STOP',
  id,
});

export const toggleStop = id => ({
  type: 'COMPLETE_STOP',
  id,
});
