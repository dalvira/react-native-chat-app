import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({ enableFilter, onPressSearch, onPressFilter }) => {
  const { container, inputContainer, input, buttonsContainer, button } = styles;
  const filter = () => {
    if (enableFilter) {
      return (
        <Icon.Button
          style={button}
          name="tune"
          color="#818181"
          backgroundColor="#F5FCFF"
          onPress={onPressFilter}
        />
      );
    }
  };
  return (
    <View style={container}>
      <View style={inputContainer}>
        <TextInput style={input} placeholder="Search" />
      </View>
      <View style={buttonsContainer}>
        <Icon.Button
          style={button}
          name="magnify"
          color="#818181"
          backgroundColor="#F5FCFF"
          onPress={onPressSearch}
        />
        {filter()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40
  },
  inputContainer: {
    flex: 4
  },
  input: {
    height: 40
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {}
});

export default SearchBar;
