import React from 'react';
import RemoveUserCard from "./RemoveUserCard";


const RemoveUserList = ({users, chatId}) => {

    return (
        <div className={"user-list"}>
            {users.map(user => (
                <RemoveUserCard key={user.id} id={user.id} user={user} chatId={chatId}/>
            ))}
        </div>
    );

}

export default RemoveUserList;
