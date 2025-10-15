import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import consigneeReducer from '../../components/component/shopping/redux/reducer/consigneeReduceer';

const allReducer = combineReducers({
  counterReducer,
  isLoggedReducer,
  consigneeReducer,
});

export default allReducer;
