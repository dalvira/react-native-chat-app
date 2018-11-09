import firebase from 'firebase';

export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const MESSAGES_FETCH_SUCCESS = 'MESSAGES_FETCH_SUCCESS';
export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const SEND = 'SEND';
export const SEND_SUCCESS = 'SEND_SUCCESS';
export const SEND_FAIL = 'SEND_FAIL';

export const messagesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/messages`)
      .on('value', snapshot => {
        dispatch({
          type: MESSAGES_FETCH_SUCCESS,
          payload: { snapshot: snapshot.val() }
        });
      });
  };
};

export function onChangeText(text) {
  return {
    type: ON_CHANGE_TEXT,
    payload: { text: text }
  };
}

export function onPressSend(message) {
  return dispatch => {
    dispatch({ type: SEND });
    const { currentUser } = firebase.auth();
    fetchUser(dispatch, currentUser);
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/conversations`)
      .push({ message });
    sendSuccess(dispatch, message);
  };
}

const fetchUser = (dispatch, user) => {
  dispatch({
    type: USER_FETCH_SUCCESS,
    payload: { user: user }
  });
};

const sendSuccess = (dispatch, message) => {
  dispatch({
    type: SEND_SUCCESS,
    payload: { message: message }
  });
};

const sendFail = dispatch => {
  dispatch({
    type: SEND_FAIL,
    payload: {}
  });
};
