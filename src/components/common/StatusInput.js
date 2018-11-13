import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusInput = ({ onChangeText, onPressUpdateStatus }) => {
  const {
    container,
    inputContainer,
    input,
    buttonsContainer,
    updateButton
  } = styles;
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput
          style={input}
          placeholder="Search"
          onChangeText={onChangeText}
        />
      </View>
      <View style={buttonsContainer}>
        <Icon.Button
          style={updateButton}
          name="magnify"
          color="#818181"
          backgroundColor="#FBFDFF"
          onPress={onPressUpdateStatus}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFDFF',
    flexDirection: 'row',
    height: 40,
    borderRadius: 4.5
  },
  inputContainer: {
    flex: 4,
    paddingLeft: 15
  },
  input: {
    height: 40
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  updateButton: {
    flex: 1
  }
});

export default StatusInput;
