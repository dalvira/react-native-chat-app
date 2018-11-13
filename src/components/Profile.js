import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import {
  userDataFetch,
  onChangeText,
  onPressUpdateStatus,
  onPressEditProfile,
  onPressSignOut
} from '../actions/profileActions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from './common/ButtonCustom';
import PhotoGallery from './common/PhotoGallery';
import StatusInput from './common/StatusInput';

class Profile extends Component {
  componentWillMount() {
    this.props.userDataFetch();
  }

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
      body
    } = styles;

    const images = [
      require('./common/img/guyphoto.jpg'),
      require('./common/img/guyphoto2.jpg'),
      require('./common/img/guyphoto3.jpg')
    ];

    const handleOnPressEditProfile = () => {
      alert('Edit Profile');
    };

    const handleSignOut = () => {
      this.props.onPressSignOut(this.props.navigation);
    };

    const handleOnChangeText = text => {
      this.props.onChangeText(text);
    };

    const handleOnPressUpdateStatus = () => {
      this.props.onPressUpdateStatus(this.props.text);
    };

    return (
      <View style={container}>
        <View style={photoContainer}>
          <PhotoGallery images={images} />
        </View>
        <View style={body}>
          <View style={userInfoContainer}>
            <View style={usernameContainer}>
              <Text style={usernameStyle}>@{this.props.displayName}</Text>
            </View>
            <View style={infoDistanceContainer}>
              <View style={nameAgeContainer}>
                <Text style={nameStyle}>{this.props.firstName}, </Text>
                <Text style={ageStyle}>27</Text>
              </View>
              <View style={distanceContainer}>
                <Text style={distanceStyle}>2 mi</Text>
              </View>
            </View>
          </View>
          <View style={statusContainer}>
            <Text style={statusStyle}>{this.props.status}</Text>
          </View>
          <View style={chatButtonContainer}>
            <StatusInput
              onChangeText={handleOnChangeText}
              onPressUpdateStatus={handleOnPressUpdateStatus}
              value={this.props.text}
            />
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

const mapStateToProps = state => ({
  displayName: state.profileReducer.displayName,
  firstName: state.profileReducer.firstName,
  lastName: state.profileReducer.lastName,
  age: state.profileReducer.age,
  status: state.profileReducer.status,
  text: state.profileReducer.text,
  email: state.profileReducer.email
});

export default connect(
  mapStateToProps,
  {
    userDataFetch,
    onChangeText,
    onPressUpdateStatus,
    onPressEditProfile,
    onPressSignOut
  }
)(Profile);
