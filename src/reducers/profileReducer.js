import {
  USER_DATA_FETCH_SUCCESS,
  ON_CHANGE_TEXT,
  STATUS_UPDATE,
  STATUS_UPDATE_SUCCESS,
  ON_PRESS_UPDATE_STATUS,
  ON_PRESS_EDIT_PROFILE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL
} from '../actions/profileActions';

const initialState = {
  myProfile: false,
  displayName: '',
  firstName: '',
  lastName: '',
  age: '',
  status: '',
  text: '',
  email: '',
  loading: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DATA_FETCH_SUCCESS: {
      return {
        ...state,
        displayName: action.payload.snapshot.displayName,
        firstName: action.payload.snapshot.firstName,
        status: action.payload.snapshot.status
      };
    }
    case ON_CHANGE_TEXT: {
      console.log(action.payload.text);
      return {
        ...state,
        text: action.payload.text
      };
    }
    case STATUS_UPDATE: {
      return {
        ...state
      };
    }
    case STATUS_UPDATE_SUCCESS: {
      return {
        ...state,
        status: action.payload.status,
        text: ''
      };
    }
    case SIGN_OUT_SUCCESS: {
      return {
        ...state,
        initialState
      };
    }
    case SIGN_OUT_FAIL: {
      return {
        ...state,
        error: 'Sign Out Failed',
        loading: false,
        password: '',
        email: ''
      };
    }
    default:
      return state;
  }
}
