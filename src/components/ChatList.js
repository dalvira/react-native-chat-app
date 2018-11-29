import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchChats } from '../actions/chatListActions';

import ChatItem from './ChatItem';

class ChatList extends Component {
  componentWillMount() {
    this.props.fetchChats();
  }

  keyExtractor = (chatItem, index) => chatItem.id;

  render() {
    const renderRow = chatItem => {
      if (chatItem == undefined) {
      } else {
        return <ChatItem />;
      }
    };

    const { container, listContainer } = styles;

    return (
      <View style={container}>
        <View style={listContainer}>
          <FlatList
            data={this.props.chatrooms}
            keyExtractor={this.keyExtractor}
            renderItem={renderRow}
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
  listContainer: { flex: 1 }
});

const mapStateToProps = state => ({
  chatrooms: state.chatListReducer.chatrooms
});

export default connect(
  mapStateToProps,
  { fetchChats }
)(ChatList);
