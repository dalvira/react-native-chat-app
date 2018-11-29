import {
  USER_FETCH_SUCCESS,
  MESSAGES_FETCH_SUCCESS,
  ON_CHANGE_TEXT,
  SEND_SUCCESS
} from '../actions/chatRoomActions';

const initialState = {
  selectedUser: '',
  user: {
    _id: 1,
    name: 'Developer',
    avatar: 'https://placeimg.com/140/140/any'
  },
  messages: [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any'
      }
    }
  ],
  text: '',
  isFetching: '',
  lastFetched: '',
  height: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      console.log(action.payload.user);
      return {
        ...state,
        user: action.payload.user
      };
    case MESSAGES_FETCH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        conversation: action.payload.snapshot
      };
    case ON_CHANGE_TEXT:
      return {
        ...state,
        text: action.payload.text
      };
    case SEND_SUCCESS:
      return {
        ...state,
        messages: action.payload.message.concat(state.messages)
      };
    default:
      return state;
  }
}
