import firebase from 'firebase';

export const USER_DATA_FETCH_SUCCESS = 'USER_DATA_FETCH_SUCCESS';
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
