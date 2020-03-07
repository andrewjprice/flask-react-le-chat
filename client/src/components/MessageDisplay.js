import React from 'react';
import Message from './Message';
import './../App.css';

function MessageDisplay(props) {
    const { messages } = props;
    const messagesList = messages.map((msg,i) => {
        return (
            <Message message={msg} key={i} />
        )
    })
    return (
        <div class="chat-window">
            {messagesList}
        </div>
    )
}

export default MessageDisplay;