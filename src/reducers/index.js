import { combineReducers } from 'redux';
import logInReducer from './logInReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  logInReducer: logInReducer,
  registerReducer: registerReducer
});
