import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusInput = ({ value, onChangeText, onPressUpdateStatus }) => {
  const {
    container,
    inputContainer,
    input,
    buttonsContainer,
    updateButton,
    buttonLabelStyle
  } = styles;
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput
          style={input}
          placeholder="What's going on?"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      <View style={buttonsContainer}>
        <TouchableOpacity
          style={updateButton}
          backgroundColor="#FBFDFF"
          onPress={onPressUpdateStatus}
        >
          <Text style={buttonLabelStyle}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFDFF',
    flexDirection: 'row',
    height: 40,
    borderRadius: 4.5,
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 4,
    marginLeft: 30
  },
  input: {
    height: 40,
    fontSize: 14
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.8,
    borderColor: '#74777B',
    borderRadius: 10,
    marginRight: 30
  },
  updateButton: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabelStyle: {
    color: '#4963FF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default StatusInput;
