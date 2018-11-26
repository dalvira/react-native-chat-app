import {
  ON_CHANGE_SEARCH_TEXT,
  ON_PRESS_SEARCH,
  USER_SEARCH_FETCH_SUCCESS,
  NEARBY_USERS_FETCH_SUCCESS,
  ON_PRESS_FILTER,
  ON_PRESS_USER_ITEM
} from '../actions/userListActions';

const initialState = {
  text: '',
  searchQuery: '',
  selectedUser: {},
  nearbyUsersList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_SEARCH_TEXT: {
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
    case NEARBY_USERS_FETCH_SUCCESS: {
      return {
        ...state,
        nearbyUsersList: action.payload.snapshot
      };
    }
    case ON_PRESS_USER_ITEM: {
      return {
        ...state,
        selectedUser: action.payload.selectedUser
      };
    }
    default:
      return state;
  }
}
