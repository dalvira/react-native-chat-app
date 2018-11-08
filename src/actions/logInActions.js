import firebase from 'firebase';

export const ON_CHANGE_EMAIL_LOG_IN = 'ON_CHANGE_EMAIL_LOG_IN';
export const ON_CHANGE_PASSWORD_LOG_IN = 'ON_CHANGE_PASSWORD_LOG_IN';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export function onChangeEmailLogIn(text) {
  return {
    type: ON_CHANGE_EMAIL_LOG_IN,
    payload: { text: text }
  };
}

export function onChangePasswordLogIn(text) {
  return {
    type: ON_CHANGE_PASSWORD_LOG_IN,
    payload: { text: text }
  };
}

export function onPressLogIn(navigation, emailLogIn, passwordLogIn) {
  return dispatch => {
    dispatch({ type: LOG_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(emailLogIn, passwordLogIn)
      .then(user => {
        logInSuccess(dispatch, user);
        navigation.navigate('TabNav');
      })
      .catch(() => logInFail(dispatch));
  };
}

const logInSuccess = (dispatch, user) => {
  dispatch({
    type: LOG_IN_SUCCESS,
    payload: { user: user }
  });
};

const logInFail = dispatch => {
  dispatch({
    type: LOG_IN_FAIL,
    payload: {}
  });
};
