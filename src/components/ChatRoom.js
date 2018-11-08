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
    console.log(text);
    onChangeText(text);
  };

  handleOnPressSend = messages => {
    onPressSend(messages);
    GiftedChat.append({ messages }, messages);
  };

  const { container } = styles;

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => this.handleOnPressSend(messages)}
      user={{
        _id: 1
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ChatRoom;
