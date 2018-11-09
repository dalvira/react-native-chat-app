import {
  USER_FETCH_SUCCESS,
  MESSAGES_FETCH_SUCCESS,
  ON_CHANGE_TEXT,
  SEND_SUCCESS,
  START_FETCHING_MESSAGES,
  RECEIVED_MESSAGES,
  UPDATE_MESSAGES_HEIGHT,
  ADD_MESSAGE,
  SEND_MESSAGE
} from '../actions/chatRoomActions';

const initialState = {
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
    case START_FETCHING_MESSAGES:
      return {
        ...state,
        isFetching: action.payload.isFetching
      };
    case RECEIVED_MESSAGES:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        lastFetched: action.payload.receivedAt
      };
    case UPDATE_MESSAGES_HEIGHT:
      return {
        ...state,
        height: action.payload.height
      };
    default:
      return state;
  }
}

// const meta = (state = initialState, action) => {
//   switch (action.type) {
//     case 'START_FETCHING_MESSAGES':
//       return Object.assign({}, state, {
//         isFetching: true
//       });
//     case 'RECEIVED_MESSAGES':
//       return Object.assign({}, state, {
//         isFetching: false,
//         lastFetched: action.receivedAt
//       });
//     case 'UPDATE_MESSAGES_HEIGHT':
//       return Object.assign({}, state, {
//         height: action.height
//       });
//     default:
//       return state;
//   }
// };
// const chatroom = combineReducers({
//   messages,
//   meta
// });

// const message = (state, action) => {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       return {
//         ...state,
//         id: action.id,
//         text: action.text,
//         time: action.time,
//         author: action.author
//       };
//     case SEND_MESSAGE:
//       let msg = {
//         text: action.text,
//         time: Date.now(),
//         author: {
//           name: action.user.name,
//           avatar: action.user.avatar
//         }
//       };
//       const newMsgRef = firebase
//         .database()
//         .ref('messages')
//         .push();
//       msg.id = newMsgRef.key;
//       newMsgRef.set(msg);
//       return msg;
//       return {
//         ...state
//       };
//     default:
//       return state;
//   }
// };
