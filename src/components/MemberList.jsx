import React from 'react';
import MemberCard from "./MemberCard";


const MemberList = ({members}) => {

    return (
        <div className={"member-list"}>
            {members.map(member => (
                <MemberCard key={member.id} id={member.id} member={member}/>
            ))}
        </div>
    );

}

export default MemberList;
