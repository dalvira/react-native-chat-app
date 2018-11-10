import firebase from 'firebase';

export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const ON_PRESS_SEARCH = 'ON_PRESS_SEARCH';
export const ON_PRESS_FILTER = 'ON_PRESS_FILTER';
export const ON_PRESS_USER_ITEM = 'ON_PRESS_USER_ITEM';

export function onChangeText(input) {
  console.log(input);
  return {
    type: ON_CHANGE_TEXT,
    payload: { input: input }
  };
}

export function onPressSearch(navigation, input) {
  console.log(input);
  navigation.navigate('User');
  return {
    type: ON_PRESS_SEARCH,
    payload: { searchQuery: input }
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
