import { combineReducers } from 'redux';
import stopReducer from './stopReducer';

export default combineReducers({
  shipments: stopReducer,
});
