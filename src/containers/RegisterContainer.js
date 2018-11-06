import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {
  onChangeNameRegister,
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
          nameRegister={this.props.nameRegister}
          emailRegister={this.props.emailRegister}
          passwordRegister={this.props.passwordRegister}
          loadingRegister={this.props.loadingRegister}
          errorRegister={this.props.errorRegister}
          onChangeNameRegister={this.props.onChangeNameRegister}
          onChangeEmailRegister={this.props.onChangeEmailRegister}
          onChangePasswordRegister={this.props.onChangePasswordRegister}
          onPressRegister={this.props.onPressRegister}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nameRegister: state.registerReducer.nameRegister,
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
    onChangeNameRegister,
    onChangeEmailRegister,
    onChangePasswordRegister,
    onPressRegister
  }
)(Register);
