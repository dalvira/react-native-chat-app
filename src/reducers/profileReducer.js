import {
  USER_DATA_FETCH_SUCCESS,
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
        firstName: action.payload.snapshot.firstName
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
