import React from 'react';
import MemberCard from "./MemberCard";

const ChatInfo = ({ selectedChat }) => {
    return (
        <div className="chat-info">
            {/*<h2>Chat {selectedChat} Information</h2>*/}
            {/* Add additional info components as needed */}
            <h3><strong>Chat name</strong></h3>
            <p>description of the chat</p>
            <h4 style={{ marginTop: '1em'}}><strong>Creator</strong></h4>
            <MemberCard/>
            <h4 style={{ marginTop: '1em'}}><strong>Members</strong></h4>
            <MemberCard/>
            <MemberCard/>
            <MemberCard/>

        </div>
    );
};

export default ChatInfo;
