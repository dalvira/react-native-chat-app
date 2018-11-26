import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  userDataFetch,
  fetchImages,
  toggleDiscoverable,
  onChangeText,
  onPressUpdateStatus,
  onPressSettings,
  onPressSignOut,
  enableDiscoverable,
  disableDiscoverable
} from '../actions/profileActions';

import PhotoGallery from './common/PhotoGallery';
import StatusInput from './common/StatusInput';

class Profile extends Component {
  componentWillMount() {
    this.props.userDataFetch();
    // this.props.fetchImages();
  }

  render() {
    const {
      container,
      photoContainer,
      photoStyle,
      settingsButtonContainer,
      settingsButton,
      userInfoAndDiscover,
      userInfoContainer,
      discoverContainer,
      discoverLabelContainer,
      discoverLabel,
      dashboardContainer,
      updateStatusContainer,
      nameAgeContainer,
      statusContainer,
      switchContainer,
      switchStyle,
      nameStyle,
      ageStyle,
      statusStyle,
      usernameContainer,
      usernameStyle
    } = styles;

    const handleOnPressSettings = () => {
      this.props.onPressSettings(this.props.navigation);
    };

    const handleToggleDiscoverable = value => {
      if (value) {
        this.props.enableDiscoverable(value, navigator);
      } else {
        this.props.disableDiscoverable(value, navigator);
      }
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
          <PhotoGallery images={this.props.imageURLs} />
        </View>
        <View style={settingsButtonContainer}>
          <Icon.Button
            style={settingsButton}
            name="settings"
            backgroundColor="transparent"
            onPress={handleOnPressSettings}
          />
        </View>
        <View style={dashboardContainer}>
          <View style={userInfoAndDiscover}>
            <View style={userInfoContainer}>
              <View style={usernameContainer}>
                <Text style={usernameStyle}>@{this.props.displayName}</Text>
              </View>
              <View style={nameAgeContainer}>
                <Text style={nameStyle}>{this.props.firstName}, </Text>
                <Text style={ageStyle}>27</Text>
              </View>
            </View>
            <View style={discoverContainer}>
              <View style={discoverLabelContainer}>
                <Text style={discoverLabel}>Discoverable</Text>
              </View>
              <View style={switchContainer}>
                <Switch
                  style={switchStyle}
                  onValueChange={handleToggleDiscoverable}
                  value={this.props.discoverable}
                />
              </View>
            </View>
          </View>
          <View style={statusContainer}>
            <Text style={statusStyle}>{this.props.status}</Text>
          </View>
          <View style={updateStatusContainer}>
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
    flex: 2
  },
  photoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  settingsButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 330
  },
  settingsButton: {},
  dashboardContainer: {
    backgroundColor: '#FBFDFF',
    flex: 1,
    alignSelf: 'stretch',
    shadowOffset: { width: 1, height: -2 },
    shadowColor: '#000000',
    shadowOpacity: 0.3
  },
  userInfoAndDiscover: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfoContainer: {
    flex: 2,
    marginLeft: 25,
    paddingTop: 10
  },
  nameAgeContainer: { paddingTop: 5, flexDirection: 'row' },
  discoverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    marginRight: 4
  },
  discoverLabelContainer: {},
  discoverLabel: {
    fontSize: 14,
    color: '#74777B',
    fontWeight: '500'
  },
  switchContainer: {
    flex: 1,
    paddingTop: 1
  },
  switchStyle: {},
  statusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  updateStatusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameStyle: { fontSize: 18, color: '#74777B', fontWeight: '700' },
  ageStyle: { fontSize: 18, color: '#74777B', fontWeight: '500' },
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
  }
});

const mapStateToProps = state => ({
  imageURLs: state.profileReducer.imageURLs,
  displayName: state.profileReducer.displayName,
  firstName: state.profileReducer.firstName,
  lastName: state.profileReducer.lastName,
  age: state.profileReducer.age,
  discoverable: state.profileReducer.discoverable,
  lat: state.profileReducer.lat,
  long: state.profileReducer.long,
  status: state.profileReducer.status,
  text: state.profileReducer.text,
  email: state.profileReducer.email
});

export default connect(
  mapStateToProps,
  {
    userDataFetch,
    fetchImages,
    toggleDiscoverable,
    onChangeText,
    onPressUpdateStatus,
    onPressSettings,
    onPressSignOut,
    enableDiscoverable,
    disableDiscoverable
  }
)(Profile);
