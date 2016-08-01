import React from 'react';
import ReactDOM from 'react-dom';
import MessageApp from './containers/message-app';

const initialState = {
  messages: [{
    senderImage: 'https://placekitten.com/100/100',
    message: 'Hello World'
  },
  {
    senderImage: 'https://placekitten.com/100/100',
    message: 'Foobar'
  }]
};

ReactDOM.render((
  <MessageApp {...initialState} />
), document.getElementById('app'));
