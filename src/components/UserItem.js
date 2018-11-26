import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserItem = ({
  id,
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
          <Image style={photoStyle} source={{ uri: photoPath }} />
        </View>
        <View style={namesContainer}>
          <View style={usernameContainer}>
            <Text style={usernameStyle}>@{username}</Text>
          </View>
          <View style={nameContainer}>
            <Text style={nameStyle}>{name}</Text>
          </View>
        </View>
        <View style={statusContainer}>
          <Text style={statusStyle}>{status}</Text>
        </View>
        <View style={distanceContainer}>
          <Text style={distanceStyle}>{distance} mi</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFDFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80,
    borderWidth: 0.2,
    borderColor: '#C9C7CB'
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
    flex: 1.5,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  usernameContainer: {},
  usernameStyle: {
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'italic',
    color: '#818181'
  },
  nameContainer: {},
  nameStyle: { fontWeight: '500', color: '#74777B' },
  statusContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  statusStyle: { fontWeight: '400', color: '#74777B' },
  distanceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  distanceStyle: { fontWeight: '400', color: '#74777B' }
});

export default UserItem;
