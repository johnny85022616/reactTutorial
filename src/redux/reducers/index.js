import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';

const allReducer = combineReducers({
  counterReducer,
  isLoggedReducer,
});

export default allReducer;
