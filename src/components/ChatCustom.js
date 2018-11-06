import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  render() {
    const {
      container,
      convoContainer,
      textBoxContainer,
      textInputContainer,
      textInputStyle,
      buttonContainer,
      sendButton
    } = styles;

    const onPressSend = () => {
      console.log('Send');
    };

    return (
      <View style={container}>
        <View style={convoContainer}>
          <Text>Chat</Text>
        </View>
        <View style={textBoxContainer}>
          <View style={textInputContainer}>
            <TextInput style={textInputStyle} placeholder="Say something..." />
          </View>
          <View style={buttonContainer}>
            <Icon.Button
              style={sendButton}
              name="send"
              color="#818181"
              backgroundColor="#F1F1F1"
              onPress={onPressSend}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  convoContainer: { flex: 11 },
  textBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    flex: 4
  },
  textInputStyle: {
    height: 40
  },
  buttonContainer: {
    flex: 1
  },
  sendButton: {}
});

export default Chat;
