import React from 'react';

function UserDisplay(props) {
    const { user } = props;
    return(
        <div>
            <div className="user"></div>
            <p>{user}</p>
        </div>
    )
}

export default UserDisplay;