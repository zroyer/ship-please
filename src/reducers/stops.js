import {
  ADD_STOP_ACTION,
  EDIT_STOP_ACTION,
  DELETE_STOP_ACTION,
  COMPLETE_STOP_ACTION,
} from '../actions/index';

const stops = (state = [], action) => {
  switch (action.type) {
    case ADD_STOP_ACTION:
      return ([
        ...state,
        {
          id: action.id,
          name: action.name,
          address: action.address,
          completed: false
        }
      ]);
    case EDIT_STOP_ACTION:
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
    case DELETE_STOP_ACTION:
      return (
        state.filter((stop) => {
          return stop.id !== action.id;
        })
      );
    case COMPLETE_STOP_ACTION:
      return (
        state.map((stop) =>
          stop.id === action.id
            ? {...stop, completed: !stop.completed}
            : stop
        )
      );
    default:
      return state;
  }
}

export default stops;
