import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import SearchBar from './common/SearchBar';
import UserItem from './UserItem';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      photoPath: '../img/girlphoto.png',
      username: '@flowerchild43',
      name: 'Laura',
      status: 'Im hungry',
      distance: '2 mi'
    };
  }

  render() {
    const onPressSearch = () => {
      this.props.navigation.navigate('Chat', {
        searchInput: this.state.searchInput
      });
    };

    const onPressFilter = () => {};

    const onPressUserItem = () => {
      this.props.navigation.navigate('User');
    };

    const onChangeText = searchInput => {
      this.setState({ searchInput: searchInput });
    };

    const { container, searchBarContainer } = styles;

    return (
      <View style={container}>
        <View style={searchBarContainer}>
          <SearchBar
            value={this.state.searchInput}
            onChangeText={onChangeText}
            enableFilter={true}
            onPressSearch={onPressSearch}
            onPressFilter={onPressFilter}
          />
        </View>
        <UserItem
          photoPath={this.state.photoPath}
          username={this.state.username}
          name={this.state.name}
          status={this.state.status}
          distance={this.state.distance}
          onPressUserItem={onPressUserItem}
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
