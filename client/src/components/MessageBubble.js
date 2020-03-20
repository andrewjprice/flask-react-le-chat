import React from 'react';

function MessageBubble(props) {
    const { messageObj } = props;
    return (
        <div className="message-container">
            <p className="message-bubble">{messageObj['message']}</p>
            <div className="message-info">
                <p className="message">{messageObj['user']}</p>
                <p className="message">{messageObj['time']}</p>
            </div>
        </div>
    )
}

export default MessageBubble;