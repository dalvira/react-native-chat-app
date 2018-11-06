import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Fire from '../Fire';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    });
  }

  render() {
    const { container } = styles;

    const onPressSend = messages => {
      console.log('Send');
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));
    };

    return (
      <View style={container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => onPressSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Chat;
