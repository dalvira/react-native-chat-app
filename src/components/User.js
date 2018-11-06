import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const User = ({ navigation, photo, name, age, online, status, distance }) => {
  const {
    container,
    photoContainer,
    nameContainer,
    ageContainer,
    onlineContainer,
    statusContainer,
    distanceContainer
  } = styles;

  const onPressChat = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={container}>
      <View style={photoContainer}>
        <Text>Photo</Text>
      </View>
      <View style={nameContainer}>
        <Text>Name</Text>
      </View>
      <View style={ageContainer}>
        <Text>Age</Text>
      </View>
      <View style={statusContainer}>
        <Text>Status</Text>
      </View>
      <View style={onlineContainer}>
        <Text>Online</Text>
      </View>
      <View style={distanceContainer}>
        <Text>Distance</Text>
      </View>
      <TouchableOpacity onPress={onPressChat}>
        <Text>CHAT</Text>
      </TouchableOpacity>
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

export default User;
