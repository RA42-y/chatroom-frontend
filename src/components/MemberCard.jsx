import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/pictures/default-user-avatar.png"
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const MemberCard = ({member}) => {

    return (
        <Card className={'member-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={UserDefaultAvatar} alt={UserDefaultAvatar} className={"avatar user-avatar"}/>
                    <div className={"flex-column"} style={{textAlign: 'left'}}>
                        <Card.Title>{member.firstName} {member.lastName}</Card.Title>
                        <Card.Text>
                            {/*{member.email}*/}
                            {/*<br/>*/}
                            <FontAwesomeIcon icon={faCircleCheck} style={{width: '1.5em', color: 'green'}}/> Online
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;