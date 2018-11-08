import { combineReducers } from 'redux';
import logInReducer from './logInReducer';
import registerReducer from './registerReducer';
import chatRoomReducer from './chatRoomReducer';

export default combineReducers({
  logInReducer: logInReducer,
  registerReducer: registerReducer,
  chatRoomReducer: chatRoomReducer
});
