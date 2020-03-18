import React from 'react';

function Message(props) {
    const { message } = props;

    if (message[3]) {
        return (
            <div className="registered-user-container">
                <p className="message">{message[3]}</p>
            </div>
        )
    } else {
        return (
            <div className="message-container">
                <p className="message-bubble">{message[0]}</p>
                <div className="message-info">
                    <p className="message">{message[1]}</p>
                    <p className="message">{message[2]}</p>
                </div>
            </div>
        )
    }
}

export default Message;