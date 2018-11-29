import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import config from './server';
import store from './store';
import TabNav from './AppNavigation';
import LogIn from './components/LogIn';
import Register from './components/Register';
import RegisterContainer from './containers/RegisterContainer';
import User from './components/User';
import ChatRoomContainer from './containers/ChatRoomContainer';
import SwitchNav from './AppNavigation';
import ChatList from './components/ChatList';
import PhotoGallery from './components/common/PhotoGallery';
import Profile from './components/Profile';
import ChatItem from './components/ChatItem';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <SwitchNav />
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 0.5,
    backgroundColor: 'black'
  }
};
