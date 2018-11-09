import firebase from 'firebase';

export const ON_CHANGE_TEXT = 'ON_CHANGE_TEXT';
export const ON_PRESS_SEARCH = 'ON_PRESS_SEARCH';
export const ON_PRESS_FILTER = 'ON_PRESS_FILTER';
export const ON_PRESS_USER_ITEM = 'ON_PRESS_USER_ITEM';

export function onChangeText(text) {
  return {
    type: ON_CHANGE_TEXT,
    payload: { text: text }
  };
}

export function onPressSearch(user) {
  return {
    type: ON_PRESS_SEARCH,
    payload: { user: user }
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
