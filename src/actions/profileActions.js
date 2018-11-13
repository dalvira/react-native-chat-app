import firebase from 'firebase';

export const USER_DATA_FETCH_SUCCESS = 'USER_DATA_FETCH_SUCCESS';
export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const STATUS_UPDATE = 'STATUS_UPDATE';
export const STATUS_UPDATE_SUCCESS = 'STATUS_UPDATE_SUCCESS';
export const ON_PRESS_UPDATE_STATUS = 'ON_PRESS_UPDATE_STATUS';
export const ON_PRESS_EDIT_PROFILE = 'ON_PRESS_EDIT_PROFILE';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAIL = 'SIGN_OUT_FAIL';

export function userDataFetch() {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .on('value', snapshot => {
        dispatch({
          type: USER_DATA_FETCH_SUCCESS,
          payload: { snapshot: snapshot.val() }
        });
      });
  };
}

export function onChangeText(text) {
  return {
    type: ON_CHANGE_TEXT,
    payload: { text: text }
  };
}

export function onPressUpdateStatus(status) {
  return dispatch => {
    dispatch({ type: STATUS_UPDATE });
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .update({
        status: status
      });
    statusUpdateSuccess(dispatch, status);
  };
}

// const updateStatus = (userId, status) => {
//   firebase
//     .database()
//     .ref('users/' + userId)
//     .set({
//       status: status
//     });
// };

const statusUpdateSuccess = (dispatch, status) => {
  dispatch({
    type: STATUS_UPDATE_SUCCESS,
    payload: { status: status }
  });
};

export function onPressEditProfile() {
  return {
    type: ON_PRESS_EDIT_PROFILE,
    payload: {}
  };
}

export function onPressSignOut(navigation) {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(user => {
        signOutSuccess(dispatch);
        navigation.navigate('AuthStack');
      })
      .catch(() => signOutFail(dispatch));
  };
}

const signOutSuccess = dispatch => {
  dispatch({
    type: SIGN_OUT_SUCCESS,
    payload: {}
  });
};

const signOutFail = dispatch => {
  dispatch({
    type: SIGN_OUT_FAIL,
    payload: {}
  });
};
