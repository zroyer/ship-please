let nextStopId = 0;
export const addStop = ({ name, address }) => ({
  type: 'ADD_STOP',
  id: nextStopId++,
  name,
  address,
});

export const deleteStop = id => ({
  type: 'DELETE_STOP',
  id,
});

export const toggleStop = id => ({
  type: 'COMPLETE_STOP',
  id,
});
