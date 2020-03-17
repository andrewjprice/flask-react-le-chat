import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <div className="message-container">
            <p className="message-bubble">{message[1]}</p>
            <p className="message-user">{message[0]}</p>
        </div>
    )
}

export default Message;