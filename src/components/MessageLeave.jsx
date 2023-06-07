import Card from 'react-bootstrap/Card';
import React from "react";
import {Row} from "react-bootstrap";

const MessageOnline = ({sender}) => {

    return (
        <div className={"d-flex justify-content-start"}
             style={{display: 'flex', flexDirection: 'column', marginTop: '0.5em'}}>
            <Row>
                <p style={{color: 'dimgray', textAlign: "center", fontSize: 'small', marginBottom: '0.5em'}}>{sender} has left the chat</p>
            </Row>
        </div>
    );
}

export default MessageOnline;