import {
  ADD_STOP_ACTION,
  EDIT_STOP_ACTION,
  DELETE_STOP_ACTION,
  COMPLETE_STOP_ACTION,
  FETCH_ADDRESS_BEGIN,
  FETCH_ADDRESS_SUCCESS,
  FETCH_ADDRESS_ERROR,
} from '../actions/index';

const initialState = {
  stops: [],
  isLoading: false,
};

const stopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS_BEGIN:
      return ({
        ...state,
        isLoading: true,
      });
    case FETCH_ADDRESS_SUCCESS:
      return ({
        ...state,
        stops: [
          ...state.stops,
          {
            id: action.id,
            name: action.name,
            address: action.address,
            completed: false
          }
        ],
        isLoading: false,
      });
    case FETCH_ADDRESS_ERROR:
      return ({
        ...state,
        isLoading: false,
      });
    case EDIT_STOP_ACTION:
      return ({
        ...state,
        stops: state.stops.map((stop) => {
          return (
            stop.id === action.id
              ? {
                ...stop,
                ...action.newValues,
              }
              : stop
          )})
      });
    case DELETE_STOP_ACTION:
      return ({
        ...state,
        stops: state.stops.filter((stop) => {
            return (
              stop.id !== action.id
            );
          })
      });
    case COMPLETE_STOP_ACTION:
      return ({
        ...state,
        stops: state.stops.map((stop) => {
          return (
            stop.id === action.id
              ? {...stop, completed: !stop.completed}
              : stop
          )})
      });
    default:
      return state;
  }
}

export default stopReducer;
