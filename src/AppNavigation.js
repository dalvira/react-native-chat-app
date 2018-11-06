import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import UserList from './components/UserList';
import User from './components/User';

import ChatList from './components/ChatList';
import Chat from './components/Chat';

import Profile from './components/Profile';

const UserListStack = createStackNavigator({
  UserList: { screen: UserList },
  User: { screen: User },
  Chat: { screen: Chat }
});

const ChatListStack = createStackNavigator({
  ChatList: { screen: ChatList },
  Chat: { screen: Chat }
});

const TabBar = createBottomTabNavigator(
  {
    UserListStack: { screen: UserListStack },
    ChatListStack: { screen: ChatListStack },
    Profile: { screen: Profile }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'UserListStack') {
          iconName = `account-multiple${focused ? '' : '-outline'}`;
        } else if (routeName === 'ChatListStack') {
          iconName = `message-text${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `account${focused ? '' : '-outline'}`;
        }
        return (
          <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default TabBar;
