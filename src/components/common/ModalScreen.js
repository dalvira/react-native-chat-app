import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

class ModalScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ModalScreen;
