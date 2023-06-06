import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png"
import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const InviteUserCard = ({user, chatId}) => {
    const [userId, setUserId] = useState('');

    const handleInvite = (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/chat/invite-user/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.put(url, {userId: userId}, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('User invited successfully:', response.data);
            })
            .catch(error => {
                console.error('Error inviting user:', error);
            });
    };

    return (
        <Card className={'user-card member-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={UserDefaultAvatar} className={"avatar user-avatar"}/>
                    <div className={"flex-column"} style={{textAlign: 'left'}}>
                        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                        <Card.Text>
                            {user.email}
                        </Card.Text>
                    </div>
                    <Button variant={"light"} style={{
                        textAlign: 'center',
                        margin: 'auto 0 auto auto',
                        borderRadius: '50%',
                        width: '3em',
                        height: '3em'
                    }} onClick={handleInvite}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default InviteUserCard;