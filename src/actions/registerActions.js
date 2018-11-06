import firebase from 'firebase';

export const ON_CHANGE_NAME_REGISTER = 'ON_CHANGE_NAME_REGISTER';
export const ON_CHANGE_EMAIL_REGISTER = 'ON_CHANGE_EMAIL_REGISTER';
export const ON_CHANGE_PASSWORD_REGISTER = 'ON_CHANGE_PASSWORD_REGISTER';
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export function onChangeNameRegister(text) {
  return {
    type: ON_CHANGE_NAME_REGISTER,
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
  nameRegister,
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
        currentUser.displayName = nameRegister;
        writeUserData(currentUser.uid, nameRegister, currentUser.email);
        registerSuccess(dispatch, user);
        navigation.navigate('ModalStackNavigator');
      })
      .catch(() => registerFail(dispatch));
  };
}

const writeUserData = (userId, name, email) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      name: name,
      email: email
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
