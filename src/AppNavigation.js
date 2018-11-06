import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import UserList from './components/UserList';
import User from './components/User';

import ChatList from './components/ChatList';
import Chat from './components/Chat';

import Profile from './components/Profile';

import LogInContainer from './containers/LogInContainer';
import RegisterContainer from './containers/RegisterContainer';
import AuthLoading from './components/AuthLoading';

const UserListStack = createStackNavigator({
  UserList: { screen: UserList },
  User: { screen: User },
  Chat: { screen: Chat }
});

const ChatListStack = createStackNavigator({
  ChatList: { screen: ChatList },
  Chat: { screen: Chat }
});

const ProfileStack = createStackNavigator({
  Profile: { screen: Profile }
});

const TabNav = createBottomTabNavigator(
  {
    UserListStack: { screen: UserListStack },
    ChatListStack: { screen: ChatListStack },
    ProfileStack: { screen: ProfileStack }
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
        } else if (routeName === 'ProfileStack') {
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

const AuthStack = createStackNavigator(
  {
    LogInContainer: LogInContainer,
    RegisterContainer: RegisterContainer
  },
  {
    headerMode: 'none'
  }
);

const SwitchNav = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    TabNav: TabNav,
    AuthStack: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default TabNav;
