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
      users: JSON.parse(sessionStorage.getItem('users', '')) || [],
      current_user: sessionStorage.getItem('current_user' || '')
    };
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.disconnect);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", this.disconnect);
    this.socketListeners();
  }

  disconnect = (e) => {
    socket.emit('unregister_user', { 'user': this.state.current_user });
  }

  socketListeners() {
    socket.on('send_message', (data) => {
      const { message, user, time } = data;
      this.setState({ messages: [...this.state.messages, [user, message, time]] });
    })

    socket.on('register_user', (data) => {
      const users = data['users'];
      this.setState({ users: users });
      sessionStorage.setItem('users', JSON.stringify(users));
    })

    socket.on('unregister_user', (data) => {
      const users = data['users'];
      this.setState({ users: users });
      sessionStorage.setItem('users', JSON.stringify(users));
    })
  }

  sendMessage = (message) => {
    socket.emit('send_message', {'user': this.state.current_user, 'message': message})
  }

  handleSubmit = (message) => {
    this.sendMessage(message);
  }

  enterChat = (username) => {
    socket.emit('register_user', username)
    sessionStorage.setItem('current_user', username);
    this.setState({ current_user: username });
  }

  render() {
    const { messages, users, current_user } = this.state;
    return(
      <div>
        <div className="window">
          <div className="user-list">
            <UserListDisplay users={users} />
          </div>
          <div className="container">
            <MessageDisplay messages={messages} />
            <InputBar handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <JoinChatModal current_user={current_user} enterChat={this.enterChat} />
      </div>
    )
  }
}

export default App;
