import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeDisplayNameRegister,
  onChangeFirstNameRegister,
  onChangeLastNameRegister,
  onChangeDateOfBirth,
  onChangeEmailRegister,
  onChangePasswordRegister,
  onPressRegister
} from '../actions/registerActions';

import Register from '../components/Register';
class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Register
          emailRegister={this.props.emailRegister}
          passwordRegister={this.props.passwordRegister}
          loadingRegister={this.props.loadingRegister}
          errorRegister={this.props.errorRegister}
          onChangeDisplayNameRegister={this.props.onChangeDisplayNameRegister}
          onChangeFirstNameRegister={this.props.onChangeFirstNameRegister}
          onChangeLastNameRegister={this.props.onChangeLastNameRegister}
          onChangeDateOfBirth={this.props.onChangeDateOfBirth}
          onChangeEmailRegister={this.props.onChangeEmailRegister}
          onChangePasswordRegister={this.props.onChangePasswordRegister}
          onPressRegister={this.props.onPressRegister}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  displayNameRegister: state.registerReducer.displayNameRegister,
  firstNameRegister: state.registerReducer.firstNameRegister,
  lastNameRegister: state.registerReducer.lastNameRegister,
  dateOfBirth: state.registerReducer.dateOfBirth,
  emailRegister: state.registerReducer.emailRegister,
  passwordRegister: state.registerReducer.passwordRegister,
  loadingRegister: state.registerReducer.loadingRegister,
  errorRegister: state.registerReducer.errorRegister
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(
  mapStateToProps,
  {
    onChangeDisplayNameRegister,
    onChangeFirstNameRegister,
    onChangeLastNameRegister,
    onChangeDateOfBirth,
    onChangeEmailRegister,
    onChangePasswordRegister,
    onPressRegister
  }
)(Register);
