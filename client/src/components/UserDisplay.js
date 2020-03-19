import React from 'react';

function UserDisplay(props) {
    const { user } = props;
    return(
        <div className="user-display">
            <div className="online-status"><span className="dot"></span></div>
            <div className="username"><p className="username-text">{user}</p></div>
        </div>
    )
}

export default UserDisplay;