import React from 'react';
import io from 'socket.io-client';
import MessageDisplay from './components/MessageDisplay';
import InputBar from './components/InputBar';
import JoinChatModal from './components/JoinChatModal';
import './App.css';

const socket = io();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      users: []
    };
  }

  componentDidMount() {
    this.socketListeners();
  }

  socketListeners() {
    socket.on('send_message', (message) => {
      console.log(message);
      this.setState({ messages: [...this.state.messages, message] });
    })
  }

  sendMessage = (message) => {
    socket.emit('send_message', message)
  }

  handleSubmit = (message) => {
    this.sendMessage(message);
  }

  enterChat = (username) => {
    this.setState({ users: [...this.state.users, username] });
  }

  render() {
    const { messages, users } = this.state;
    return(
      <div>
        <div className="window">
          <div className="side-bar">{users}</div>
          <div className="container">
            <MessageDisplay messages={messages} />
            <InputBar handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <JoinChatModal enterChat={this.enterChat} />
      </div>
    )
  }
}

export default App;
