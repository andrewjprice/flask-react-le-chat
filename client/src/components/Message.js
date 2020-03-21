import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <div className="registered-user-container">
            <p className="message">{message}</p>
        </div>
    )
}

export default Message;