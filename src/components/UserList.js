import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './common/SearchBar';
import UserItem from './UserItem';

import {
  onChangeSearchText,
  onPressSearch,
  fetchNearbyUsers,
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

  componentWillMount() {
    this.props.fetchNearbyUsers();
  }

  // handleOnPressUserItem = () => {
  //   this.props.navigation.navigate('User');
  // };

  keyExtractor = (nearbyUser, index) => nearbyUser.id;

  renderRow(nearbyUser, handleOnPressUserItem) {
    return (
      <UserItem
        id={nearbyUser.item.id}
        // photoPath={this.state.photoPath}
        username={nearbyUser.item.displayName}
        name={nearbyUser.item.firstName}
        status={nearbyUser.item.status}
        distance={nearbyUser.item.distance}
        onPressUserItem={this.props.onPressUserItem}
      />
    );
  }

  render() {
    // const handleOnPressUserItem = this.props.onPressUserItem;

    const handleText = text => {
      this.props.onChangeSearchText(text);
    };

    const handleOnPressSearch = () => {
      this.props.onPressSearch(this.props.navigation, this.props.text);
    };

    const { container, searchBarContainer, listContainer } = styles;

    return (
      <View style={container}>
        <View style={searchBarContainer}>
          <SearchBar
            onChangeText={handleText}
            onPressSearch={handleOnPressSearch}
          />
        </View>
        <View style={listContainer}>
          <FlatList
            data={this.props.nearbyUsersList}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderRow}
          />
        </View>
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
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  listContainer: { flex: 15 }
});

const mapStateToProps = state => {
  const nearbyUsersList = _.map(state.userListReducer.nearbyUsersList, val => {
    console.log({ ...val });
    return { ...val };
  });
  return {
    nearbyUsersList,
    text: state.userListReducer.text
  };
};

export default connect(
  mapStateToProps,
  { onChangeSearchText, onPressSearch, fetchNearbyUsers, onPressUserItem }
)(UserList);
