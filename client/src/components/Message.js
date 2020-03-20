import React from 'react';
import MessageBubble from './MessageBubble';

function Message(props) {
    const { message } = props;
    return (
        <div className="registered-user-container">
            <p className="message">{message}</p>
        </div>
    )
}

export default Message;