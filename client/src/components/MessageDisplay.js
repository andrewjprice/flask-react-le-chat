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
            <div className="chat-container">
                {messagesList}
            </div>
        </div>
    )
}

export default MessageDisplay;