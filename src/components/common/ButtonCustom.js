import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ label, onPress }) => {
  const { container, buttonStyle, labelStyle } = styles;

  return (
    <View style={container}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 50 },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    shadowOffset: { width: 1, height: 3 },
    shadowColor: '#000000',
    shadowOpacity: 0.2
  },
  labelStyle: {
    fontSize: 20,
    color: '#26358A',
    fontWeight: 'bold'
  }
});

export default ButtonCustom;
