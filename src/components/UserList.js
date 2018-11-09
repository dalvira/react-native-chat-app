import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import SearchBar from './common/SearchBar';
import UserItem from './UserItem';

import {
  onChangeText,
  onPressSearch,
  onPressFilter,
  onPressUserItem
} from '../actions/userListActions';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      photoPath: '../img/girlphoto.png',
      username: '@flowerchild43',
      name: 'Laura',
      status: 'Im hungry',
      distance: '2 mi'
    };
  }

  render() {
    const handleText = text => {
      onChangeText(text);
    };

    const handleOnPressSearch = () => {
      this.props.navigation.navigate('User');
    };

    const handleOnPressFilter = () => {};

    const handleOnPressUserItem = () => {
      this.props.navigation.navigate('User');
    };

    const { container, searchBarContainer } = styles;

    return (
      <View style={container}>
        <View style={searchBarContainer}>
          <SearchBar
            onChangeText={handleText}
            enableFilter={true}
            onPressSearch={handleOnPressSearch}
            onPressFilter={handleOnPressFilter}
          />
        </View>
        <UserItem
          photoPath={this.state.photoPath}
          username={this.state.username}
          name={this.state.name}
          status={this.state.status}
          distance={this.state.distance}
          onPressUserItem={handleOnPressUserItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9C7CB'
  },
  searchBarContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 6,
    paddingRight: 33
  }
});

export default UserList;
