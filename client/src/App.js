import React from 'react';
import io from 'socket.io-client';
import MessageDisplay from './components/MessageDisplay';
import InputBar from './components/InputBar';
import './App.css';

const socket = io();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.socketListeners();
  }

  socketListeners() {
    socket.on('message', (message) => {
      console.log(message);
      this.setState({ messages: [...this.state.messages, message] });
    })
  }

  sendMessage = (message) => {
    socket.emit('message', message)
  }

  handleSubmit = (message) => {
    this.sendMessage(message);
  }

  render() {
    const { messages } = this.state;
    return(
      <div class="container">
        <MessageDisplay messages={messages} />
        <InputBar handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
