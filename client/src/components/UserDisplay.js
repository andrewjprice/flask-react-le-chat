import React, { useState } from 'react';

function UserDisplay(props) {
    const { user } = props;
    return(
        <p>{user}</p>
    )
}

export default UserDisplay;