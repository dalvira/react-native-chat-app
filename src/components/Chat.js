import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = ({ photo, name, age, online, status, distance, onPressChat }) => {
  const {
    container,
    photoContainer,
    nameContainer,
    ageContainer,
    onlineContainer,
    statusContainer,
    distanceContainer
  } = styles;

  return (
    <View style={container}>
      <View style={photoContainer}>
        <Text>Chat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoContainer: {
    flex: 1
  },
  nameContainer: {
    flex: 1
  },
  ageContainer: {
    flex: 1
  },
  onlineContainer: {
    flex: 1
  },
  statusContainer: {
    flex: 1
  },
  distanceContainer: {
    flex: 1
  }
});

export default Chat;
