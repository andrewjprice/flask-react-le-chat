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
            <h2 className="text-center">Users</h2>
            <div className="pad-10">
                {usersList}
            </div>
        </div>
    )
}

export default UserListDisplay;