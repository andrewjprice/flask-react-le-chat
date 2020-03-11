import React from 'react';
import UserDisplay from '../components/UserDisplay';

function UserListDisplay(props) {
    const { users } = props;
    const usersList = users.map((user,i) => {
        return (
            <UserDisplay user={user} key={i} />
        )
    })

    return (
        <div>
            {usersList}
        </div>
    )
}

export default UserListDisplay;