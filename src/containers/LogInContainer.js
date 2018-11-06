import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeEmailLogIn,
  onChangePasswordLogIn,
  onPressLogIn
} from '../actions/logInActions';

import LogIn from '../components/LogIn';
class LogInContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <LogIn
          emailLogIn={this.props.emailLogIn}
          passwordLogIn={this.props.passwordLogIn}
          loadingLogIn={this.props.loadingLogIn}
          errorLogIn={this.props.errorLogIn}
          onChangeEmailLogIn={this.props.onChangeEmailLogIn}
          onChangePasswordLogIn={this.props.onChangePasswordLogIn}
          onPressLogIn={this.props.onPressLogIn}
          onPressSignUp={this.props.onPressSignUp}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  emailLogIn: state.logInReducer.emailLogIn,
  passwordLogIn: state.logInReducer.passwordLogIn,
  loadingLogIn: state.logInReducer.loadingLogIn,
  errorLogIn: state.logInReducer.errorLogIn
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  { onChangeEmailLogIn, onChangePasswordLogIn, onPressLogIn }
)(LogIn);
