import React from 'react';
import io from 'socket.io-client';
import MessageDisplay from './components/MessageDisplay';
import InputBar from './components/InputBar';
import JoinChatModal from './components/JoinChatModal';
import UserListDisplay from './components/UserListDisplay';

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
      this.setState({ messages: [...this.state.messages, message] });
    })

    socket.on('register_user', (user) => {
      this.setState({ users: [...this.state.users, user] });
    })
  }

  sendMessage = (message) => {
    socket.emit('send_message', message)
  }

  handleSubmit = (message) => {
    this.sendMessage(message);
  }

  enterChat = (username) => {
    socket.emit('register_user', {'username': username})
  }

  render() {
    const { messages, users } = this.state;
    return(
      <div>
        <div className="window">
          <UserListDisplay users={users} />
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
