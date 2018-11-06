import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => {
  const { container } = styles;

  return (
    <View style={container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Spinner;
