import React, { Component } from 'react';
import {} from 'react-native';
import { connect } from 'react-redux';

import ChatRoom from '../components/ChatRoom';

import {
  messagesFetch,
  onChangeText,
  onPressSend
} from '../actions/chatRoomActions';

class ChatRoomContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ChatRoom
        user={this.props.user}
        text={this.props.text}
        messages={this.props.messages}
        messagesFetch={this.props.messagesFetch}
        onChangeText={this.props.onChangeText}
        onPressSend={this.props.onPressSend}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.chatRoomReducer.user,
  text: state.chatRoomReducer.text,
  messages: state.chatRoomReducer.messages
});

export default connect(
  mapStateToProps,
  { messagesFetch, onChangeText, onPressSend }
)(ChatRoom);
