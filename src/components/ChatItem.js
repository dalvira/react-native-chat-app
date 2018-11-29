import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ChatItem = ({
  id,
  photo,
  name,
  recentMessage,
  time,
  onPressChatItem
}) => {
  const {
    container,
    photoContainer,
    photoStyle,
    namesContainer,
    usernameContainer,
    usernameStyle,
    messageContainer,
    messageStyle,
    timeContainer,
    timeStyle
  } = styles;

  return (
    <TouchableOpacity onPress={onPressChatItem}>
      <View style={container}>
        <View style={photoContainer}>
          <Image
            style={photoStyle}
            source={require('./common/img/girlphoto.jpg')}
          />
        </View>
        <View style={namesContainer}>
          <View style={usernameContainer}>
            <Text style={usernameStyle}>username</Text>
          </View>
          <View style={messageContainer}>
            <Text style={messageStyle}>Recent message.</Text>
          </View>
        </View>
        <View style={namesContainer}>
          <View style={timeContainer}>
            <Text style={timeStyle}>3:32 pm</Text>
          </View>
          <View style={messageContainer} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFDFF',
    flexDirection: 'row',
    height: 80,
    borderWidth: 0.2,
    borderColor: '#C9C7CB'
  },
  photoContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  photoStyle: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  namesContainer: {
    flex: 3.7
  },
  usernameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  usernameStyle: { fontWeight: '300', fontStyle: 'italic', color: '#818181' },
  nameStyle: { fontWeight: '500', color: '#74777B' },
  messageContainer: { flex: 1, paddingTop: 3 },
  messageStyle: { fontWeight: '400', color: '#74777B' },
  timeContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10
  },
  timeStyle: { fontWeight: '400', color: '#74777B' }
});

export default ChatItem;
