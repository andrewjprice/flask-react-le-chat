import React from 'react';
import Message from './Message';

function MessageDisplay(props) {
    const { messages } = props;
    const messagesList = messages.map((msg,i) => {
        return (
            <Message message={msg} key={i} />
        )
    })
    return (
        <div>
            {messagesList}
        </div>
    )
}

export default MessageDisplay;