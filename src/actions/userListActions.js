import firebase from 'firebase';

export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const ON_PRESS_SEARCH = 'ON_PRESS_SEARCH';
export const USER_SEARCH_FETCH_SUCCESS = 'USER_SEARCH_FETCH_SUCCESS';
export const ON_PRESS_FILTER = 'ON_PRESS_FILTER';
export const ON_PRESS_USER_ITEM = 'ON_PRESS_USER_ITEM';

export function onChangeText(text) {
  return {
    type: ON_CHANGE_TEXT,
    payload: { text: text }
  };
}

export function onPressSearch(navigation, searchQuery) {
  const { currentUser } = firebase.auth;
  // console.log(
  //   firebase
  //     .database()
  //     .ref('users')
  //     .orderByChild('displayName')
  //     .equalTo(searchQuery)
  // );
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

export function onPressFilter() {
  return {
    type: ON_PRESS_FILTER,
    payload: {}
  };
}

export function onPressUserItem(user) {
  return {
    type: ON_PRESS_USER_ITEM,
    payload: { user: user }
  };
}
