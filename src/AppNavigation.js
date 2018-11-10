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
import ChatRoomContainer from './containers/ChatRoomContainer';

import Profile from './components/Profile';

import LogInContainer from './containers/LogInContainer';
import RegisterContainer from './containers/RegisterContainer';
import AuthLoading from './components/AuthLoading';

import ModalScreen from './components/common/ModalScreen';

const UserListStack = createStackNavigator({
  UserList: {
    screen: UserList,
    navigationOptions: {
      title: 'Discover',
      headerStyle: {
        backgroundColor: '#4963FF'
      },
      headerTitleStyle: {
        color: '#FBFDFF'
      }
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      title: 'User',
      headerStyle: {
        backgroundColor: '#4963FF'
      },
      headerTintColor: '#FBFDFF',
      headerTitleStyle: {
        color: '#FBFDFF'
      }
    }
  },
  ChatRoomContainer: { screen: ChatRoomContainer }
});

const ChatListStack = createStackNavigator({
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      title: 'Messages',
      headerStyle: {
        backgroundColor: '#4963FF'
      },
      headerTintColor: '#FBFDFF',
      headerTitleStyle: {
        color: '#FBFDFF'
      }
    }
  },
  ChatRoomContainer: { screen: ChatRoomContainer }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#4963FF'
      },
      headerTintColor: '#FBFDFF',
      headerTitleStyle: {
        color: '#FBFDFF'
      }
    }
  }
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
      activeTintColor: '#4963FF',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {}
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
