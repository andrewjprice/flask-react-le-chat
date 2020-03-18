import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <div className="message-container">
            <p className="message-bubble">{message[1]}</p>
            <div className="message-info">
                <p className="message">{message[0]}</p>
                <p className="message">{message[2]}</p>
            </div>
        </div>
    )
}

export default Message;