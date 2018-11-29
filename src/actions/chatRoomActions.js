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
      .ref(`/chatrooms/${id}/messages`)
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

//when starting a new conversation a chatroom id is created
//if the members of the conversation do not already share
//an existing chatroom

export function onPressSend(message) {
  return dispatch => {
    const { currentUser } = firebase.auth();
    fetchUser(dispatch, currentUser.uid);
    console.log(message);
    const id = message[0]._id;
    const text = message[0].text;
    const createdAt = message[0].createdAt;
    const user = message[0].user;
    const image = message[0].image;
    console.log(id, text, createdAt, user, image);
    dispatch({ type: SEND });
    // console.log(currentUser.uid);
    firebase
      .database()
      .ref(`/chatrooms/0/messages`)
      .set({ id });
    // .set({ createdAt: createdAt, text: text });
    sendSuccess(dispatch, message);
  };
}

const fetchUser = (dispatch, user) => {
  console.log(user);
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
