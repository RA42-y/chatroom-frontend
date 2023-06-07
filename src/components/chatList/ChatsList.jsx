import React from 'react';
import ChatCard from './ChatCard';


const ChatsList = ({ chats, onChatCardClick }) => {

    const handleClick = (id) => {
        onChatCardClick(id); // Invoke the callback function passed from the parent component
    };

    return (
            <div>
                {chats.map((chat) => (
                    <div className={"chat-card-container"} id={`chat-${chat.id}`} key={chat.id}
                         onClick={() => handleClick(chat.id)}>
                        <ChatCard chatName={chat.name} description={chat.description}/>
                    </div>
                ))}
            </div>
    );

}

export default ChatsList;
