import {
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
  apiError: null,
};

const stopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ADDRESS_BEGIN:
      return {
        ...state,
        isLoading: true,
        apiError: null,
      };
    case FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        stops: [
          ...state.stops,
          {
            id: payload.id,
            name: payload.name,
            address: payload.address,
            completed: false,
          },
        ],
        isLoading: false,
        apiError: null,
      };
    case FETCH_ADDRESS_ERROR:
      return {
        ...state,
        isLoading: false,
        apiError: payload.error,
      };
    case EDIT_STOP_ACTION:
      return {
        ...state,
        stops: state.stops.map((stop) => {
          return stop.id === payload.id
            ? {
                ...stop,
                ...payload.newValue,
              }
            : stop;
        }),
      };
    case DELETE_STOP_ACTION:
      return {
        ...state,
        stops: state.stops.filter((stop) => {
          return stop.id !== payload.id;
        }),
      };
    case COMPLETE_STOP_ACTION:
      return {
        ...state,
        stops: state.stops.map((stop) => {
          return stop.id === payload.id
            ? { ...stop, completed: !stop.completed }
            : stop;
        }),
      };
    default:
      return state;
  }
};

export default stopReducer;
