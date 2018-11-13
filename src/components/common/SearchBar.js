import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({
  value,
  onChangeText,
  enableFilter,
  onPressSearch,
  onPressFilter
}) => {
  const {
    container,
    inputContainer,
    input,
    buttonsContainer,
    searchButtonContainer,
    searchButton,
    filterButtonContainer,
    filterButton
  } = styles;
  const filter = () => {
    if (enableFilter) {
      return (
        <View style={filterButtonContainer}>
          <Icon.Button
            style={filterButton}
            name="tune"
            color="#818181"
            backgroundColor="#FBFDFF"
            onPress={onPressFilter}
          />
        </View>
      );
    }
  };
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
        <View style={searchButtonContainer}>
          <Icon.Button
            style={searchButton}
            name="magnify"
            color="#818181"
            backgroundColor="#FBFDFF"
            onPress={onPressSearch}
          />
        </View>
        {filter()}
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
    paddingLeft: 20
  },
  input: {
    height: 40
  },
  buttonsContainer: {
    paddingLeft: 20,
    flex: 1,
    flexDirection: 'row'
  },
  searchButtonContainer: {
    flex: 1
  },
  searchButton: {},
  filterButtonContainer: {
    flex: 1
  },
  filterButton: {}
});

export default SearchBar;
