import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

import SpinnerCustom from './common/SpinnerCustom';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const userToken = this.props.user;
    this.props.navigation.navigate(
      userToken ? 'ModalStackNavigator' : 'AuthStack'
    );
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <SpinnerCustom size="large" color="#FFFFFF" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.logInReducer.user
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  null
)(AuthLoading);
