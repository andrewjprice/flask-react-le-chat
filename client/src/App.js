import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {
  constructor() {
    super();
    this.state = { response: '' };
  }

  componentDidMount() {
    const socket = io();
    socket.on('connect', () => {
      socket.emit('message', {data: 'I\'m connected!'});
      socket.on('message', (msg) => {
        console.log(msg);
        this.setState({ response: msg });
      })
    });
  }

  render() {
    const { response } = this.state;
    return(
      <div>
        <h1>Le Chat</h1>
        <p>Response: {response}</p>
      </div>
    )
  }
}

export default App;
