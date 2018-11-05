import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserItem = ({
  photo,
  name,
  online,
  status,
  distance,
  onPressUserItem
}) => {
  const {
    container,
    photoContainer,
    nameContainer,
    onlineContainer,
    statusContainer,
    distanceContainer
  } = styles;

  return (
    <TouchableOpacity onPress={onPressUserItem}>
      <View style={container}>
        <View style={photoContainer}>
          <Text>{photo}</Text>
        </View>
        <View style={nameContainer}>
          <Text>{name}</Text>
        </View>
        <View style={statusContainer}>
          <Text>{status}</Text>
        </View>
        <View style={onlineContainer}>
          <Text>{online}</Text>
        </View>
        <View style={distanceContainer}>
          <Text>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  photoContainer: {
    flex: 1
  },
  nameContainer: {
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

export default UserItem;
