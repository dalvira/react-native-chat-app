import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from './common/ButtonCustom';
import PhotoGallery from './common/PhotoGallery';

class User extends Component {
  componentWillMount() {}

  render() {
    const {
      container,
      photoContainer,
      photoStyle,
      userInfoContainer,
      nameAgeContainer,
      statusContainer,
      distanceContainer,
      chatButtonContainer,
      nameStyle,
      ageStyle,
      distanceStyle,
      statusStyle,
      buttonLabelStyle,
      usernameContainer,
      usernameStyle,
      infoDistanceContainer,
      body,
      optionsButtonContainer,
      optionsButton
    } = styles;

    const handleOnPressOptions = () => {
      console.log('Options');
    };

    const onPressChat = () => {
      this.props.navigation.navigate('ChatRoomContainer');
    };

    const images = [
      require('./common/img/girlphoto.jpg'),
      require('./common/img/girlphoto2.jpg'),
      require('./common/img/girlphoto3.jpg')
    ];

    return (
      <View style={container}>
        <View style={photoContainer}>
          <PhotoGallery images={images} />
        </View>
        <View style={optionsButtonContainer}>
          <Icon.Button
            style={optionsButton}
            name="dots-vertical"
            backgroundColor="transparent"
            size={30}
            onPress={handleOnPressOptions}
          />
        </View>
        <View style={body}>
          <View style={userInfoContainer}>
            <View style={usernameContainer}>
              <Text style={usernameStyle}>@flowerchild43</Text>
            </View>
            <View style={infoDistanceContainer}>
              <View style={nameAgeContainer}>
                <Text style={nameStyle}>Laura, </Text>
                <Text style={ageStyle}>27</Text>
              </View>
              <View style={distanceContainer}>
                <Text style={distanceStyle}>2 mi</Text>
              </View>
            </View>
          </View>
          <View style={statusContainer}>
            <Text style={statusStyle}>"Im hungry"</Text>
          </View>
          <View style={chatButtonContainer}>
            <ButtonCustom label="CHAT" onPress={onPressChat} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoContainer: {
    alignSelf: 'stretch',
    flex: 7
  },
  photoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  optionsButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 335
  },
  optionsButton: {},
  userInfoContainer: {
    flex: 1.3,
    alignSelf: 'stretch',
    marginLeft: 25,
    paddingTop: 10
  },
  infoDistanceContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5
  },
  nameAgeContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  distanceContainer: {
    flex: 1,
    alignItems: 'center'
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center'
  },
  chatButtonContainer: {
    flex: 1.2,
    alignSelf: 'stretch'
  },
  nameStyle: { fontSize: 18, color: '#74777B', fontWeight: '700' },
  ageStyle: { fontSize: 18, color: '#74777B', fontWeight: '500' },
  distanceStyle: { fontSize: 18, color: '#74777B', fontWeight: '500' },
  statusStyle: { fontSize: 18, color: '#74777B', fontWeight: '500' },
  buttonLabelStyle: {},
  usernameContainer: {
    alignSelf: 'stretch'
  },
  usernameStyle: {
    fontWeight: '300',
    fontSize: 18,
    color: '#818181',
    fontStyle: 'italic'
  },
  body: {
    backgroundColor: '#FBFDFF',
    flex: 3.5,
    alignSelf: 'stretch',
    shadowOffset: { width: 1, height: -2 },
    shadowColor: '#000000',
    shadowOpacity: 0.3
  }
});

export default User;
