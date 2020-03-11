import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <p className="bubble-text">{message[0]}: {message[1]}</p>
    )
}

export default Message;