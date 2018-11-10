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
    searchButton,
    filterButton
  } = styles;
  const filter = () => {
    if (enableFilter) {
      return (
        <Icon.Button
          style={filterButton}
          name="tune"
          color="#818181"
          backgroundColor="#FBFDFF"
          onPress={onPressFilter}
        />
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
        <Icon.Button
          style={searchButton}
          name="magnify"
          color="#818181"
          backgroundColor="#FBFDFF"
          onPress={onPressSearch}
        />
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
    paddingLeft: 15
  },
  input: {
    height: 40
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  searchButton: {
    flex: 1
  },
  filterButton: {
    flex: 1
  }
});

export default SearchBar;
