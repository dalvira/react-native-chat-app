import {
  ON_CHANGE_DISPLAY_NAME_REGISTER,
  ON_CHANGE_FIRST_NAME_REGISTER,
  ON_CHANGE_LAST_NAME_REGISTER,
  ON_CHANGE_DATE_OF_BIRTH,
  ON_CHANGE_EMAIL_REGISTER,
  ON_CHANGE_PASSWORD_REGISTER,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/registerActions';

const initialState = {
  displayNameRegister: '',
  firstNameRegister: '',
  lastNameRegister: '',
  datOfBirth: '',
  emailRegister: '',
  passwordRegister: '',
  loadingRegister: '',
  errorRegister: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ON_CHANGE_DISPLAY_NAME_REGISTER: {
      return {
        ...state,
        displayNameRegister: action.payload.text
      };
    }
    case ON_CHANGE_FIRST_NAME_REGISTER: {
      return {
        ...state,
        firstNameRegister: action.payload.text
      };
    }
    case ON_CHANGE_LAST_NAME_REGISTER: {
      return {
        ...state,
        lastNameRegister: action.payload.text
      };
    }
    case ON_CHANGE_DATE_OF_BIRTH: {
      return {
        ...state,
        dateOfBirth: action.payload.text
      };
    }
    case ON_CHANGE_EMAIL_REGISTER: {
      return {
        ...state,
        emailRegister: action.payload.text
      };
    }
    case ON_CHANGE_PASSWORD_REGISTER: {
      return {
        ...state,
        passwordRegister: action.payload.text
      };
    }
    case REGISTER: {
      return {
        ...state,
        loadingRegister: true,
        errorRegister: ''
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        loadingRegister: false,
        errorRegister: ''
      };
    }
    case REGISTER_FAIL: {
      return {
        ...state,
        loadingRegister: false,
        errorRegister: 'Register failed. Try again.',
        passwordRegister: ''
      };
    }
    default:
      return state;
  }
}
