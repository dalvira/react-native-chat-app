import React from 'react';
import {} from 'react-native';
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
    onPressSend(message);
  };

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

export default ChatRoom;
