import firebase from 'firebase';

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

export function onPressSend(messages) {
  return dispatch => {
    dispatch({ type: SEND });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/messages`)
      .push({ messages });
    sendSuccess(dispatch, messages);
  };
}

const sendSuccess = (dispatch, messages) => {
  dispatch({
    type: SEND_SUCCESS,
    payload: { messages: messages }
  });
};

const sendFail = dispatch => {
  dispatch({
    type: SEND_FAIL,
    payload: {}
  });
};
