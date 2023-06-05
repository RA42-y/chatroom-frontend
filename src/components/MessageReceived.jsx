import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png"
import {faPaperPlane, faPencil, faRightFromBracket, faUserPen, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Row} from "react-bootstrap";

const MessageReceived = ({message, timestamp, sender}) => {

    return (
        <div className={"d-flex justify-content-start"}
             style={{display: 'flex', flexDirection: 'column', marginTop: '0.5em'}}>
            <Row>
                <Card className="message-bubble message-bubble-received float-left">
                    <Card.Body style={{padding: '0.5em 1em'}}>
                        <Card.Text style={{color: 'black', marginBottom: '0.5em'}}>{message}</Card.Text>
                        <Card.Subtitle style={{
                            color: 'dimgray',
                            fontSize: 'x-small',
                            textAlign: 'left'
                        }}>{timestamp}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Row>
            <Row style={{textAlign: 'left'}}>
                <p style={{padding: "unset", margin: "0.25em 0 0 0", color:'dimgray', fontSize: 'small'}}>{sender}</p>
            </Row>
        </div>
    );
}

export default MessageReceived;