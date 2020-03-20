import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './../App.css';

function MessageDisplay(props) {
    const { messages } = props;
    const endMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endMessagesRef.current.scrollIntoView(false);
    }

    useEffect(scrollToBottom, [messages]);

    const messagesList = messages.map((message,i) => {
        return (
            <Message message={message} key={i} />
        )
    })

    return (
        <div className="chat-window">
            <div className="chat-container">
                {messagesList}
                <div ref={endMessagesRef}></div>
            </div>
        </div>
    )
}

export default MessageDisplay;