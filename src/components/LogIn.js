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
    subtitle,
    inputStyle,
    accountQuestion,
    signUpLink,
    errorStyle,
    buttonStyle,
    labelStyle
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
        <Text style={title}>Villie</Text>
        {/* <Text style={subtitle}>CHAT</Text> */}
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
            <ButtonCustom
              buttonStyle={buttonStyle}
              labelStyle={labelStyle}
              label={'Log In'}
              onPress={this.handleLogIn}
            />
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
    // justifyContent: 'center',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F6F8FA'
  },
  subtitle: {
    fontSize: 18,
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
    justifyContent: 'center'
    // paddingTop: 4
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
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8FA',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#3B4EC2',
    marginLeft: 30,
    marginRight: 30,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#000000',
    shadowOpacity: 0.2
  },
  labelStyle: {
    fontSize: 20,
    color: '#4963FF',
    fontWeight: 'bold'
  }
});

export default LogIn;
