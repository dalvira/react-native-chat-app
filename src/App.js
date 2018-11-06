import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import TabNav from './AppNavigation';
import LogIn from './components/LogIn';
import Register from './components/Register';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}
