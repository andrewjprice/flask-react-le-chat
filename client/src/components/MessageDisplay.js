import React, { useEffect, useRef } from 'react';
import Message from './Message';
import UserMessage from './UserMessage';
import './../App.css';

function MessageDisplay(props) {
    const { messages, current_user, usersTyping } = props;
    const endMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endMessagesRef.current.scrollIntoView(false);
    }

    useEffect(scrollToBottom, [messages]);

    const messagesList = messages.map((obj,i) => {
        if (obj['message']) {
            return (
                <UserMessage messageObj={obj} current_user={current_user} key={i} />
            )
        } else {
            return (
                <Message message={obj['status']} key={i} />
            )
        }
    })

    return (
        <div className="chat-window">
            <div className="chat-container">
                {messagesList}
                { usersTyping.length > 1 && 
                <p className="typing animate">{usersTyping}<span>.</span><span>.</span><span>.</span></p>
                }
                <div ref={endMessagesRef}></div>
            </div>
        </div>
    )
}

export default MessageDisplay;