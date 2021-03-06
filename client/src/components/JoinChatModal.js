import React, { useState } from 'react';

function JoinChatModal(props) {
    const { enterChat, current_user, users } = props;
    const [ showModal, setShowModal ] = useState(current_user == null);

    const onSubmit = (e) => {
        const { value } = e.target[0];
        if (value === '') {
            alert('Username required to enter.');
            e.preventDefault();
        }
        else if (users.indexOf(value) > -1) {
            alert('Username already exists.');
            e.preventDefault();
        } else {
            enterChat(value);
            setShowModal(!showModal);
        }
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