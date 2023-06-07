import React from 'react';
import InviteUserCard from "./InviteUserCard";


const InviteUserList = ({users, chatId}) => {

    return (
        <div className={"user-list"}>
            {users.map(user => (
                <InviteUserCard key={user.id} id={user.id} user={user} chatId={chatId}/>
            ))}
        </div>
    );

}

export default InviteUserList;
