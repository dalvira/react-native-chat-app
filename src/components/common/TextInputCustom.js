import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const TextInputCustom = ({
  inputLabelStyle,
  label,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  multiline,
  keyboardType
}) => {
  const { container, labelStyle, textInputStyle } = styles;

  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={textInputStyle}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        multiline={multiline}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    alignSelf: 'stretch'
  },
  labelContainerStyle: {},
  labelStyle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500'
  },
  textInputStyle: {
    height: 30,
    fontSize: 18,
    color: '#FFFFFF',
    borderBottomWidth: 0.8,
    borderColor: '#FFFFFF'
  }
});

export default TextInputCustom;
