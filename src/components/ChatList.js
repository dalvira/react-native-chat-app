import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import SearchBar from './common/SearchBar';
import ChatItem from './ChatItem';

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: 'photo',
      name: 'Laura',
      status: 'Im hungry',
      online: 'online',
      distance: '2 mi'
    };
  }

  render() {
    const onPressSearch = () => {
      console.log('Search');
    };

    const onPressFilter = () => {
      console.log('Filter');
    };

    const onPressChatItem = () => {
      console.log('User Item');
      this.props.navigation.navigate('Chat');
    };

    const { container, searchBarContainer } = styles;

    return (
      <View style={container}>
        <View style={searchBarContainer}>
          <SearchBar
            onPressSearch={onPressSearch}
            onPressFilter={onPressFilter}
          />
        </View>
        <ChatItem
          photo={this.state.photo}
          name={this.state.name}
          status={this.state.status}
          online={this.state.online}
          distance={this.state.distance}
          onPressUserItem={onPressChatItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  searchBarContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30
    // marginRight: 10
  }
});

export default ChatList;
