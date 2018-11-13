import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TextInputCustom from './common/TextInputCustom';
import ButtonCustom from './common/ButtonCustom';
import SpinnerCustom from './common/SpinnerCustom';

const Register = ({
  navigation,
  displayNameRegister,
  firstNameRegister,
  lastNameRegister,
  dateOfBirth,
  emailRegister,
  passwordRegister,
  loadingRegister,
  errorRegister,
  onChangeEmailRegister,
  onChangePasswordRegister,
  onPressRegister,
  onChangeDateOfBirth,
  onChangeLastNameRegister,
  onChangeFirstNameRegister,
  onChangeDisplayNameRegister
}) => {
  const {
    container,
    header,
    title,
    body,
    textInputContainer,
    usernameInputContainer,
    emailInputContainer,
    nameInputContainer,
    passwordInputContainer,
    buttonsContainer,
    registerButtonContainerStyle,
    cancelButtonContainer,
    cancelLink,
    errorStyle
  } = styles;

  handleDisplayName = text => {
    onChangeDisplayNameRegister(text);
  };

  handleFirstName = text => {
    onChangeFirstNameRegister(text);
  };

  handleLastName = text => {
    onChangeLastNameRegister(text);
  };

  handleDateOfBirth = text => {
    onChangeDateOfBirth(text);
  };

  handleEmail = text => {
    onChangeEmailRegister(text);
  };

  handlePassword = text => {
    onChangePasswordRegister(text);
  };

  handleRegister = () => {
    onPressRegister(
      navigation,
      displayNameRegister,
      firstNameRegister,
      lastNameRegister,
      dateOfBirth,
      emailRegister,
      passwordRegister
    );
  };

  handleCancel = () => {
    navigation.goBack();
  };

  renderSpinner = () => {
    if (loadingRegister) {
      return <SpinnerCustom size="large" color="#FFFFFF" />;
    }
  };

  renderError = () => {
    if (errorRegister) {
      return (
        <View>
          <Text style={errorStyle}>{errorRegister}</Text>
        </View>
      );
    }
  };

  return (
    <View style={container}>
      <View style={header}>
        <Text style={title}>Villie</Text>
      </View>
      <View style={body}>
        <View style={textInputContainer}>
          <View style={usernameInputContainer}>
            <TextInputCustom
              label={'USERNAME'}
              placeholder={'kdotfraizer'}
              onChangeText={this.handleDisplayName}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={nameInputContainer}>
            <TextInputCustom
              label={'FIRST NAME'}
              placeholder={'Kim'}
              onChangeText={this.handleFirstName}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={nameInputContainer}>
            <TextInputCustom
              label={'LAST NAME'}
              placeholder={'Fraizer'}
              onChangeText={this.handleLastName}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={nameInputContainer}>
            <TextInputCustom
              label={'DATE OF BIRTH'}
              placeholder={'mm/dd/yyy'}
              onChangeText={this.handleDateOfBirth}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={emailInputContainer}>
            <TextInputCustom
              label={'EMAIL'}
              placeholder={'example@gmail.com'}
              onChangeText={this.handleEmail}
              placeholderTextColor="#D9DBDB"
            />
          </View>
          <View style={passwordInputContainer}>
            <TextInputCustom
              label={'PASSWORD'}
              placeholder={'password'}
              onChangeText={this.handlePassword}
              placeholderTextColor="#D9DBDB"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={buttonsContainer}>
          <View style={registerButtonContainerStyle}>
            <ButtonCustom label={'Register'} onPress={this.handleRegister} />
          </View>
          <View style={cancelButtonContainer}>
            <Text style={cancelLink} onPress={this.handleCancel}>
              Cancel
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
    flex: 1.2,
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
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  textInputContainer: {
    flex: 4,
    alignSelf: 'stretch',
    paddingBottom: 5
  },
  usernameInputContainer: { flex: 1 },
  nameInputContainer: { flex: 1 },
  emailInputContainer: { flex: 1 },
  passwordInputContainer: { flex: 1 },
  buttonsContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  registerButtonContainerStyle: {
    flex: 1
  },
  cancelButtonContainer: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 40
  },
  cancelLink: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  },
  footer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorStyle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 18
  }
});

export default Register;
