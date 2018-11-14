import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ buttonStyle, labelStyle, label, onPress }) => {
  const { container } = styles;

  return (
    <View style={container}>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 50 }
  // buttonStyle: {
  //   flex: 1,
  //   alignSelf: 'stretch',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#4963FF',
  //   borderRadius: 10,
  //   borderWidth: 0.5,
  //   borderColor: '#3B4EC2',
  //   marginLeft: 30,
  //   marginRight: 30,
  //   shadowOffset: { width: 1, height: 3 },
  //   shadowColor: '#000000',
  //   shadowOpacity: 0.2
  // },
  // labelStyle: {
  //   fontSize: 20,
  //   color: '#FFFFFF',
  //   fontWeight: 'bold'
  // }
});

export default ButtonCustom;
