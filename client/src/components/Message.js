import React from 'react';

function Message(props) {
    const { message } = props;
    return (
        <p class="bubble-text">{message}</p>
    )
}

export default Message;