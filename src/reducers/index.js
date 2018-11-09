import { combineReducers } from 'redux';
import logInReducer from './logInReducer';
import registerReducer from './registerReducer';
import userListReducer from './userListReducer';
import chatRoomReducer from './chatRoomReducer';

export default combineReducers({
  logInReducer: logInReducer,
  registerReducer: registerReducer,
  userListReducer: userListReducer,
  chatRoomReducer: chatRoomReducer
});
