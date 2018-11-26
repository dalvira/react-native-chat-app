import firebase from 'firebase';

export const ON_CHANGE_SEARCH_TEXT = 'ON_CHANGE_SEARCH_TEXT';
export const ON_PRESS_SEARCH = 'ON_PRESS_SEARCH';
export const USER_SEARCH_FETCH_SUCCESS = 'USER_SEARCH_FETCH_SUCCESS';
export const NEARBY_USERS_FETCH_SUCCESS = 'NEARBY_USERS_FETCH_SUCCESS';
export const ON_PRESS_FILTER = 'ON_PRESS_FILTER';
export const ON_PRESS_USER_ITEM = 'ON_PRESS_USER_ITEM';

export function onChangeSearchText(text) {
  return {
    type: ON_CHANGE_SEARCH_TEXT,
    payload: { text: text }
  };
}

export function onPressSearch(navigation, searchQuery) {
  const { currentUser } = firebase.auth;
  return dispatch => {
    firebase
      .database()
      .ref('users')
      .orderByChild('displayName')
      .equalTo(searchQuery)
      .on('value', snapshot => {
        const userId = Object.keys(snapshot.val())[0];
        dispatch({
          type: USER_SEARCH_FETCH_SUCCESS,
          payload: { snapshot: snapshot.val(), userId: userId }
        });
      });
    navigation.navigate('User');
  };
}

export const fetchNearbyUsers = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/nearbyUsers`)
      .on('value', snapshot => {
        dispatch({
          type: NEARBY_USERS_FETCH_SUCCESS,
          payload: { snapshot: snapshot.val() }
        });
      });
  };
};

export function onPressUserItem(navigation, nearbyUser) {
  return dispatch => {
    dispatch({
      type: ON_PRESS_USER_ITEM,
      payload: { selectedUser: nearbyUser }
    });
    navigation.navigate('User');
  };
}
