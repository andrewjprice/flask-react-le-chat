import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <p>{message}</p>
    )
}

export default Message;