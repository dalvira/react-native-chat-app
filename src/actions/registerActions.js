import firebase from 'firebase';

export const ON_CHANGE_DISPLAY_NAME_REGISTER =
  'ON_CHANGE_DISPLAY_NAME_REGISTER';
export const ON_CHANGE_FIRST_NAME_REGISTER = 'ON_CHANGE_FIRST_NAME_REGISTER';
export const ON_CHANGE_LAST_NAME_REGISTER = 'ON_CHANGE_LAST_NAME_REGISTER';
export const ON_CHANGE_DATE_OF_BIRTH = 'ON_CHANGE_DATE_OF_BIRTH';
export const ON_CHANGE_EMAIL_REGISTER = 'ON_CHANGE_EMAIL_REGISTER';
export const ON_CHANGE_PASSWORD_REGISTER = 'ON_CHANGE_PASSWORD_REGISTER';
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function onChangeDisplayNameRegister(text) {
  return {
    type: ON_CHANGE_DISPLAY_NAME_REGISTER,
    payload: { text: text }
  };
}

export function onChangeFirstNameRegister(text) {
  return {
    type: ON_CHANGE_FIRST_NAME_REGISTER,
    payload: { text: text }
  };
}

export function onChangeLastNameRegister(text) {
  return {
    type: ON_CHANGE_LAST_NAME_REGISTER,
    payload: { text: text }
  };
}

export function onChangeDateOfBirth(text) {
  return {
    type: ON_CHANGE_DATE_OF_BIRTH,
    payload: { text: text }
  };
}

export function onChangeEmailRegister(text) {
  return {
    type: ON_CHANGE_EMAIL_REGISTER,
    payload: { text: text }
  };
}

export function onChangePasswordRegister(text) {
  return {
    type: ON_CHANGE_PASSWORD_REGISTER,
    payload: { text: text }
  };
}

export function onPressRegister(
  navigation,
  displayNameRegister,
  firstNameRegister,
  lastNameRegister,
  dateOfBirth,
  emailRegister,
  passwordRegister
) {
  return dispatch => {
    dispatch({ type: REGISTER });
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailRegister, passwordRegister)
      .then(user => {
        const currentUser = user.user;
        currentUser.displayName = displayNameRegister;
        writeUserData(
          currentUser.uid,
          displayNameRegister,
          firstNameRegister,
          lastNameRegister,
          dateOfBirth,
          currentUser.email
        );
        registerSuccess(dispatch, user);
        navigation.navigate('TabNav');
      })
      .catch(() => registerFail(dispatch));
  };
}

const writeUserData = (
  userId,
  displayName,
  fistName,
  lastName,
  dateOfBirth,
  email
) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      email: email,
      displayName: displayName,
      fistName: fistName,
      lastName: lastName,
      dateOfBirth: dateOfBirth
    });
};

const registerSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: { user: user }
  });
};

const registerFail = dispatch => {
  dispatch({
    type: REGISTER_FAIL,
    payload: {}
  });
};
