let nextStopId = 0
export const addStop = text => ({
  type: 'ADD_STOP',
  id: nextStopId++,
  text
});

export const toggleStop = id => ({
  type: 'COMPLETE_STOP',
  id
});
