import Card from 'react-bootstrap/Card';
import React from "react";

const MessageSent = ({message, timestamp}) => {

    return (
        <div className={"d-flex justify-content-end"} style={{marginTop: '0.5em'}}>
            <Card className="message-bubble message-bubble-sent float-right">
                <Card.Body style={{padding: '0.5em 1em'}}>
                    <Card.Text style={{color: 'white', marginBottom: '0.5em', textAlign: 'left'}}>{message}</Card.Text>
                    <Card.Subtitle style={{color: 'white', fontSize: 'x-small', textAlign: 'right'}}>{timestamp}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MessageSent;