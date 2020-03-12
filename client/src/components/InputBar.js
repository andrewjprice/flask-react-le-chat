import React, { useState } from 'react';
import './../App.css';

function InputBar(props) {
    const [message, setMessage] = useState('');
    const { handleSubmit } = props;

    const handleChange = e => {
        const { value } = e.target;
        setMessage(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(message);
        setMessage('');
    }

    return (
        <div className="input-container">
          <form onSubmit={onSubmit} className="input-form">
            <input
                className="input-bar"
                type='text'
                placeholder='press enter to send message'
                value={message}
                onChange={handleChange}
            />
          </form>
        </div>
    )
}

export default InputBar;