import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../../assets/images/default-user-avatar.png"
import React from "react";

const MemberCard = ({member}) => {

    return (
        <Card className={'member-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={UserDefaultAvatar} alt={UserDefaultAvatar} className={"avatar user-avatar"}/>
                    <div className={"flex-column"} style={{textAlign: 'left'}}>
                        <Card.Title>{member.firstName} {member.lastName}</Card.Title>
                        <Card.Text style={{fontSize: 'smaller'}}>
                            {member.email}
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;