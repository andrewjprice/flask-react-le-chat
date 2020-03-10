import React, { useState } from 'react';

function JoinChatModal(props) {
    const [ showModal, setShowModal ] = useState(true);
    const { enterChat } = props;

    const onSubmit = (e) => {
        const { value } = e.target[0];
        enterChat(value);
        setShowModal(!showModal);
    }

    if (showModal) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <h1>Join Chat</h1>
                    <form onSubmit={onSubmit}>
                        <input 
                            type='text'
                            placeholder='username'
                        />
                        <br />
                        <button type='submit'>Join</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default JoinChatModal;