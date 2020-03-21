import React from 'react';

function UserMessage(props) {
    const { messageObj, current_user } = props;
    if (messageObj['user'] == current_user) {
        return (
            <div className="message-container m-left-auto">
                <p className="user-bubble">{messageObj['message']}</p>
                <div className="message-info float-right">
                    <p className="message">{messageObj['user']}</p>
                    <p className="message">{messageObj['time']}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="message-container">
                <p className="message-bubble">{messageObj['message']}</p>
                <div className="message-info float-left">
                    <p className="message">{messageObj['user']}</p>
                    <p className="message">{messageObj['time']}</p>
                </div>
            </div>
        )
    }
}

export default UserMessage;