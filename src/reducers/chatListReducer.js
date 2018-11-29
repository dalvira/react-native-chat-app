import { CHATS_FETCH_SUCCESS } from '../actions/chatListActions';

const initialState = {
  chatrooms: [],
  selectedChat: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHATS_FETCH_SUCCESS: {
      return {
        ...state,
        chatrooms: action.payload.chatrooms
      };
    }
    default:
      return state;
  }
}
