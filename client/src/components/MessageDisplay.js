import React from 'react';
import Message from './Message';
import './../App.css';

function MessageDisplay(props) {
    const { messages } = props;

    const messagesList = messages.map((message,i) => {
        return (
            <Message message={message} key={i} />
        )
    })

    return (
        <div className="chat-window">
            {messagesList}
        </div>
    )
}

export default MessageDisplay;