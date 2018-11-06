import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';
import SpinnerCustom from './common/SpinnerCustom';

const LogIn = ({
  navigation,
  emailLogIn,
  passwordLogIn,
  loadingLogIn,
  errorLogIn,
  onChangeEmailLogIn,
  onChangePasswordLogIn,
  onPressLogIn
}) => {
  const {
    container,
    header,
    title,
    inputStyle,
    accountQuestion,
    signUpLink,
    errorStyle
  } = styles;

  handleEmail = text => {
    onChangeEmailLogIn(text);
  };

  handlePassword = text => {
    onChangePasswordLogIn(text);
  };

  handleLogIn = () => {
    onPressLogIn(navigation, emailLogIn, passwordLogIn);
  };

  handleSignUp = () => {
    navigation.navigate('RegisterContainer');
  };

  renderSpinner = () => {
    if (loadingLogIn) {
      return <SpinnerCustom size="large" color="#FFFFFF" />;
    }
  };

  renderError = () => {
    if (errorLogIn) {
      return (
        <View>
          <Text style={errorStyle}>{errorLogIn}</Text>
        </View>
      );
    }
  };

  return (
    <View style={container}>
      <View style={header}>
        <Text style={title}>pley</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.textInputContainer}>
          <View style={styles.emailInputContainer}>
            <TextInputCustom
              style={inputStyle}
              label="EMAIL"
              placeholder={'example@gmail.com'}
              onChangeText={this.handleEmail}
              placeholderTextColor="#DFDFDF"
            />
          </View>
          <View style={styles.passwordInputContainer}>
            <TextInputCustom
              label="PASSWORD"
              placeholder={'password'}
              onChangeText={this.handlePassword}
              placeholderTextColor="#DFDFDF"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.logInButtonContainer}>
            <ButtonCustom label={'Log In'} onPress={this.handleLogIn} />
          </View>
          <View style={styles.signUpOptionContainer}>
            <Text style={accountQuestion}>Don't have an account yet? </Text>
            <Text style={signUpLink} onPress={this.handleSignUp}>
              Sign Up
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        {this.renderSpinner()}
        {this.renderError()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4963FF',
    alignItems: 'center'
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F6F8FA'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  textInputContainer: {
    flex: 1.5,
    alignSelf: 'stretch'
  },
  emailInputContainer: { flex: 1 },
  passwordInputContainer: { flex: 1 },
  inputStyle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  buttonsContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  logInButtonContainer: {
    flex: 0.4
  },
  signUpOptionContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  accountQuestion: {
    color: '#FFFFFF',
    fontSize: 18
  },
  signUpLink: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorStyle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  }
});

export default LogIn;
