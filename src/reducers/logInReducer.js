import {
  ON_CHANGE_EMAIL_LOG_IN,
  ON_CHANGE_PASSWORD_LOG_IN,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL
} from '../actions/logInActions';

const initialState = {
  emailLogIn: '',
  passwordLogIn: '',
  loadingLogIn: '',
  errorLogIn: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_EMAIL_LOG_IN: {
      return {
        ...state,
        emailLogIn: action.payload.text
      };
    }
    case ON_CHANGE_PASSWORD_LOG_IN: {
      return {
        ...state,
        passwordLogIn: action.payload.text
      };
    }
    case LOG_IN: {
      return {
        ...state,
        loadingLogIn: true,
        errorLogIn: ''
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        emailLogIn: '',
        passwordLogIn: '',
        loadingLogIn: false,
        errorLogIn: ''
      };
    }
    case LOG_IN_FAIL: {
      return {
        ...state,
        emailLogIn: '',
        passwordLogIn: '',
        loadingLogIn: false,
        errorLogIn: 'Invalid Email/Password'
      };
    }
    default:
      return state;
  }
}
