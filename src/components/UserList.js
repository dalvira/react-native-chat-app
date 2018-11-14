import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from './common/SearchBar';
import UserItem from './UserItem';

import {
  onChangeSearchText,
  onPressSearch,
  onPressFilter,
  onPressUserItem
} from '../actions/userListActions';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoPath: '../img/girlphoto.png',
      username: '@flowerchild43',
      name: 'Laura',
      status: 'Im hungry',
      distance: '2 mi'
    };
  }

  render() {
    const handleText = text => {
      this.props.onChangeSearchText(text);
    };

    const handleOnPressSearch = () => {
      this.props.onPressSearch(this.props.navigation, this.props.text);
    };

    const handleOnPressUserItem = () => {
      this.props.navigation.navigate('User');
    };

    const { container, searchBarContainer } = styles;

    return (
      <View style={container}>
        <View style={searchBarContainer}>
          <SearchBar
            onChangeText={handleText}
            onPressSearch={handleOnPressSearch}
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
    paddingLeft: 10,
    paddingRight: 10
  }
});

const mapStateToProps = state => ({
  text: state.userListReducer.text
});

export default connect(
  mapStateToProps,
  { onChangeSearchText, onPressSearch, onPressFilter, onPressUserItem }
)(UserList);
