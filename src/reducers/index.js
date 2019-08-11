import { combineReducers } from 'redux';
import orders from './orders';
import users from './users';

const rootReducer = combineReducers({
  users,
  orders
});

export default rootReducer;
