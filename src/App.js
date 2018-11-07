import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import config from './server';
import store from './store';
import TabNav from './AppNavigation';
import LogIn from './components/LogIn';
import Register from './components/Register';
import User from './components/User';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}
