const stops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STOP':
      return ([
        ...state,
        {
          id: action.id,
          name: action.name,
          address: action.address,
          completed: false
        }
      ]);
    case 'EDIT_STOP':
      return (
        state.map((stop) =>
          stop.id === action.id
            ? {
                ...stop,
                ...action.newValues,
              }
            : stop
        )
      );
    case 'DELETE_STOP':
      return (
        state.filter((stop) => {
          return stop.id !== action.id
        })
      );
    case 'COMPLETE_STOP':
      return (
        state.map((stop) =>
          stop.id === action.id
            ? {...stop, completed: !stop.completed}
            : stop
        )
      );
    default:
      return state
  }
}

export default stops
