import firebase from 'firebase';

export const CHATS_FETCH_SUCCESS = 'CHATS_FETCH_SUCCESS';

export const fetchChats = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    let chatrooms = [];
    const database = firebase.database();
    database
      .ref(`users/${currentUser.uid}/chatroomIDs/`)
      .on('value', snapshot => {
        snapshot.forEach(chatroomID => {
          database
            .ref(`chatrooms/${chatroomID.val()}/messages`)
            .on('value', snapshot => {
              chatrooms.push(snapshot.val());
            });
        });
        dispatch({
          type: CHATS_FETCH_SUCCESS,
          payload: { chatrooms: chatrooms }
        });
      });
  };
};
