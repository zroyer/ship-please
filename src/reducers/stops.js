const stops = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STOP':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_STOP':
      return state.map(stop =>
        (stop.id === action.id)
          ? {...stop, completed: !stop.completed}
          : stop
      )
    default:
      return state
  }
}

export default stops
