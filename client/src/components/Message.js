import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <p className="bubble-text">{message}</p>
    )
}

export default Message;