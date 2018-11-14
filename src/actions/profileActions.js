import firebase from 'firebase';

export const USER_DATA_FETCH_SUCCESS = 'USER_DATA_FETCH_SUCCESS';
export const TOGGLE_DISCOVERABLE = 'TOGGLE_DISCOVERABLE';
export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const STATUS_UPDATE = 'STATUS_UPDATE';
export const STATUS_UPDATE_SUCCESS = 'STATUS_UPDATE_SUCCESS';
export const ON_PRESS_UPDATE_STATUS = 'ON_PRESS_UPDATE_STATUS';
export const ON_PRESS_SETTINGS = 'ON_PRESS_SETTINGS';
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

export function toggleDiscoverable(value, navigator) {
  if (value) {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, ', ', longitude);
      },
      error => {
        error = error.message;
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  } else {
    navigator.geolocation.clearWatch(this.watchID);
  }

  return {
    type: TOGGLE_DISCOVERABLE,
    payload: { discoverable: value }
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

const statusUpdateSuccess = (dispatch, status) => {
  dispatch({
    type: STATUS_UPDATE_SUCCESS,
    payload: { status: status }
  });
};

export function onPressSettings(navigation) {
  return {
    type: ON_PRESS_SETTINGS,
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
