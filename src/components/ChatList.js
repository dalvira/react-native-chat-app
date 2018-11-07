import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

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
    const onPressChatItem = () => {
      console.log('User Item');
      this.props.navigation.navigate('ChatRoom');
    };

    const { container } = styles;

    return (
      <View style={container}>
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
  }
});

export default ChatList;
