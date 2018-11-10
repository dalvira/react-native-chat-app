import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ChatItem = ({
  photo,
  name,
  online,
  status,
  distance,
  onPressUserItem
}) => {
  const {
    container,
    photoContainer,
    photoStyle,
    namesContainer,
    usernameContainer,
    usernameStyle,
    nameContainer,
    nameStyle,
    statusContainer,
    statusStyle,
    distanceContainer,
    distanceStyle,
    messageContainer,
    messageStyle,
    timeContainer,
    timeStyle
  } = styles;

  return (
    <TouchableOpacity onPress={onPressUserItem}>
      <View style={container}>
        <View style={photoContainer}>
          <Image
            style={photoStyle}
            source={require('./common/img/girlphoto2.jpg')}
          />
        </View>
        <View style={namesContainer}>
          <View style={usernameContainer}>
            <Text style={usernameStyle}>username</Text>
          </View>
          <View style={messageContainer}>
            <Text style={messageStyle}>Are you serious?</Text>
          </View>
        </View>
        <View style={timeContainer}>
          <Text style={timeStyle}>3:32 pm</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFDFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 80
  },
  photoContainer: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoStyle: {
    height: 45,
    width: 45,
    borderRadius: 22
  },
  namesContainer: {
    flex: 1.7,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  usernameContainer: { backgroundColor: 'blue' },
  usernameStyle: { fontWeight: '300', fontStyle: 'italic', color: '#818181' },
  nameContainer: {},
  nameStyle: { fontWeight: '500', color: '#74777B' },
  messageContainer: { backgroundColor: 'green' },
  messageStyle: { fontWeight: '400', color: '#74777B' },
  timeContainer: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  timeStyle: { fontWeight: '400', color: '#74777B' }
});

export default ChatItem;
