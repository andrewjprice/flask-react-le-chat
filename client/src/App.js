import React from 'react';
import io from 'socket.io-client';
import MessageDisplay from './components/MessageDisplay';
import './App.css';

const socket = io();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      message: ''
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendMessage(this.state.message);
    this.setState({ message: '' });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ message: value });
  }

  render() {
    const { messages } = this.state;
    return(
      <div class="container">
        <MessageDisplay messages={messages} />
        <div class="input-container">
          <form onSubmit={this.handleSubmit}>
            <input
                class="input-bar"
                type='text'
                placeholder='send a message..'
                value={this.state.message}
                onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
