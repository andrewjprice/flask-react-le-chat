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
            <h2 className="text-center">Online</h2>
            <div className="text-center">
                {usersList}
            </div>
        </div>
    )
}

export default UserListDisplay;