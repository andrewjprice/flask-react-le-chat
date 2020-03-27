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
      current_user: sessionStorage.getItem('current_user' || ''),
      usersTyping: ''
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
    socket.on('retrieve_users', (data) => {
      const { users } = data;
      this.setState({ users: users });
    })

    socket.on('send_message', (data) => {
      const { message, user, time } = data;
      this.setState({ messages: [...this.state.messages, {'message': message, 'user': user, 'time': time }] });
    })

    socket.on('register_user', (data) => {
      const { users, user } = data;
      this.setState({ users: users, messages: [...this.state.messages, {'status': `${user} has entered the chat.`}] });
      sessionStorage.setItem('users', JSON.stringify(users));
    })

    socket.on('unregister_user', (data) => {
      const { users, user } = data;
      this.setState({ users: users, messages: [...this.state.messages, {'status': `${user} has left the chat.`}] });
      sessionStorage.setItem('users', JSON.stringify(users));
    })

    socket.on('typing', (data) => {
      const { user, typing } = data;
      if (typing && user !== this.state.current_user) {
        this.setState({ usersTyping: `${user} is typing`});
      } else {
        this.setState({ usersTyping: ' ' })
      }
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

  typingTimeout = () => {
    socket.emit('typing', { 'user': this.state.current_user, 'typing': false });
  }

  handleTyping = () => {
    socket.emit('typing', {'user': this.state.current_user, 'typing': true });
    setTimeout(this.typingTimeout, 2000)
  }

  render() {
    const { messages, users, current_user, usersTyping } = this.state;
    return(
      <div>
        <div className="window">
          <div className="user-list">
            <UserListDisplay users={users} />
          </div>
          <div className="container">
            <MessageDisplay messages={messages} current_user={current_user} usersTyping={usersTyping} />
            <InputBar handleSubmit={this.handleSubmit} handleTyping={this.handleTyping} />
          </div>
        </div>
        <JoinChatModal users={users} current_user={current_user} enterChat={this.enterChat} />
      </div>
    )
  }
}

export default App;
