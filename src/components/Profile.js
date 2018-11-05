import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class Profile extends Component {
  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default Profile;
