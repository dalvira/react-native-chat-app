import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserItem = ({
  photoPath,
  username,
  name,
  status,
  distance,
  onPressUserItem
}) => {
  const {
    container,
    photoContainer,
    photoStyle,
    namesContainer,
    usernameContainer,
    usernameStyle,
    nameContainer,
    nameStyle,
    statusContainer,
    statusStyle,
    distanceContainer,
    distanceStyle
  } = styles;

  return (
    <TouchableOpacity onPress={onPressUserItem}>
      <View style={container}>
        <View style={photoContainer}>
          <Image style={photoStyle} source={require('../img/girlphoto.png')} />
        </View>
        <View style={namesContainer}>
          <View style={usernameContainer}>
            <Text style={usernameStyle}>{username}</Text>
          </View>
          <View style={nameContainer}>
            <Text style={nameStyle}>{name}</Text>
          </View>
        </View>
        <View style={statusContainer}>
          <Text style={statusStyle}>{status}</Text>
        </View>
        <View style={distanceContainer}>
          <Text style={distanceStyle}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80
  },
  photoContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoStyle: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  namesContainer: {
    flex: 1.7,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  usernameContainer: {},
  usernameStyle: { fontWeight: '300', fontStyle: 'italic', color: '#818181' },
  nameContainer: {},
  nameStyle: { fontWeight: '500', color: '#474747' },
  statusContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusStyle: { fontWeight: '400', color: '#474747' },
  distanceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  distanceStyle: { fontWeight: '400', color: '#474747' }
});

export default UserItem;
