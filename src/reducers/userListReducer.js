import {
  ON_CHANGE_TEXT,
  ON_PRESS_SEARCH,
  USER_SEARCH_FETCH_SUCCESS,
  ON_PRESS_FILTER,
  ON_PRESS_USER_ITEM
} from '../actions/userListActions';

const initialState = {
  text: '',
  searchQuery: '',
  selectedUser: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_TEXT: {
      return {
        ...state,
        text: action.payload.text
      };
    }
    case ON_PRESS_SEARCH: {
      return {
        ...state,
        searchQuery: action.payload.searchQuery
      };
    }
    case USER_SEARCH_FETCH_SUCCESS: {
      const uid = action.payload.userId;
      return {
        ...state,
        selectedUser: action.payload.snapshot[uid]
      };
    }
    case ON_PRESS_FILTER: {
      return {
        ...state
      };
    }
    case ON_PRESS_USER_ITEM: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    default:
      return state;
  }
}
