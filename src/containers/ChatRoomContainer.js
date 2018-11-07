import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { GiftedChat } from 'react-native-gifted-chat';

import {
  messagesFetch,
  onChangeText,
  onPressSend
} from '../actions/logInActions';

class ChatRoom extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   messages: []
  //   // };
  // }

  componentWillMount() {
    console.log(this.props);
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: 'Hello developer',
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: 'React Native',
    //         avatar: 'https://placeimg.com/140/140/any'
    //       }
    //     }
    //   ]
    // });
  }

  render() {
    const { container } = styles;

    // const onPressSend = messages => {
    //   this.setState(previousState => ({
    //     messages: GiftedChat.append(previousState.messages, messages)
    //   }));
    // };

    return (
      <View style={container}>
        <GiftedChat
          // messages={this.props.messages}
          // onSend={messages => onPressSend(messages)}
          user={{
            _id: 1
          }}
          onInputTextChanged={this.props.onChangeText}
        />
        {/* <GiftedChat
          messages={this.state.messages}
          onSend={messages => onPressSend(messages)}
          user={{
            _id: 1
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = state => ({
  // previousState: state.chatRoomReducer,
  // messages: state.chatRoomReducer.messages,
  // user: state.chatRoomReducer.user
});

export default connect(
  mapStateToProps,
  { onChangeText, onPressSend }
)(ChatRoom);
