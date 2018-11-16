import {
  USER_DATA_FETCH_SUCCESS,
  TOGGLE_DISCOVERABLE,
  ON_CHANGE_TEXT,
  STATUS_UPDATE,
  STATUS_UPDATE_SUCCESS,
  ON_PRESS_UPDATE_STATUS,
  ON_PRESS_SETTINGS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL
} from '../actions/profileActions';

const initialState = {
  displayName: '',
  firstName: '',
  lastName: '',
  age: '',
  status: '',
  discoverable: false,
  lat: '',
  long: '',
  text: '',
  email: '',
  loading: '',
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_DATA_FETCH_SUCCESS: {
      console.log(action.payload.snapshot);
      return {
        ...state,
        displayName: action.payload.snapshot.displayName,
        firstName: action.payload.snapshot.firstName,
        status: action.payload.snapshot.status,
        discoverable: action.payload.snapshot.location.isSharing,
        latitude: action.payload.snapshot.location.lat,
        longitude: action.payload.snapshot.location.long
      };
    }
    case TOGGLE_DISCOVERABLE: {
      return {
        ...state,
        discoverable: action.payload.discoverable
      };
    }
    case ON_CHANGE_TEXT: {
      return {
        ...state,
        text: action.payload.text
      };
    }
    case ON_PRESS_SETTINGS: {
      console.log('Settings');
      return {
        ...state
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
