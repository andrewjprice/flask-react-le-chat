import React from 'react';

function UserDisplay(props) {
    const { user } = props;
    return(
        <div className="user-display">
            <span className="dot"></span>
            <p>{user}</p>
        </div>
    )
}

export default UserDisplay;