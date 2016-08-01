import React from 'react';
import Message from '../components/message';
import Button from '../components/button';

const MessageApp = React.createClass({
  getInitialState: function() {
    return { messages: this.props.messages }
  },

  addMessage: function () {
    var messages = this.state.messages;
    messages.push({
      senderImage: 'https://placekitten.com/100/100',
      message: 'Foobar'
    })
    this.setState({ messages: messages });
  },

  render: function () {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return (<Message {...message} key={i} />);
        })}
        <Button buttonAction={this.addMessage} text="Add Message" />
      </div>
    );
  }
});

export default MessageApp;
