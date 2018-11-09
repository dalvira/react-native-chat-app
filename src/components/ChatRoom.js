import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatRoom = ({
  navigation,
  user,
  text,
  messages,
  onChangeText,
  onPressSend
}) => {
  handleOnChangeText = text => {
    onChangeText(text);
  };

  handleOnPressSend = message => {
    // console.log(message);
    onPressSend(message);
    // GiftedChat.append(messages, message);
  };

  const { container } = styles;

  return (
    <GiftedChat
      messages={messages}
      onSend={message => this.handleOnPressSend(message)}
      user={user.uid}
      text={text}
      onInputTextChanged={text => this.handleOnChangeText(text)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ChatRoom;
