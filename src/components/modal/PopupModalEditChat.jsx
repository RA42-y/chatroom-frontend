import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import axios from 'axios';
import moment from "moment/moment";

const PopupModalEditChat = ({show, handleClose, chatId}) => {
    const [chatName, setChatName] = useState('');
    const [chatDescription, setChatDescription] = useState('');
    const [chatExpireDate, setChatExpireDate] = useState(moment().format('DD/MM/YYYY HH:mm:ss'));


    useEffect(() => {
        const fetchChatInfo = () => {
            const url = `http://localhost:8080/chat/chat-info/${chatId}`;
            axios
                .get(url)
                .then((response) => {
                    const {data} = response.data;
                    console.log(data);
                    setChatName(data.name);
                    setChatDescription(data.description);
                    setChatExpireDate(moment(data.expireDate).format('DD/MM/YYYY HH:mm:ss'));
                })
                .catch((error) => {
                    console.error('Request error: ' + error);
                });
        };

        fetchChatInfo();
    }, [chatId]);

    const handleEdit = (e) => {
        e.preventDefault();
        const url = `http://localhost:8080/chat/edit-chat/${chatId}`;
        const token = localStorage.getItem("token");
        console.log(token);

        axios.post(url, {name: chatName, description: chatDescription, expireDate: chatExpireDate}, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                console.log('Chat edited successfully:', response.data);
                localStorage.setItem('alertMessage', `Chat "${chatName}" edited successfully.`);
                localStorage.setItem('alertType', 'success');
                handleClose();
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error editing chat:', error);
                localStorage.setItem('alertMessage', `Error editing chat "${chatName}": The expiration date and time must be after the current time.`);
                localStorage.setItem('alertType', 'danger');
                window.location.reload();
            });
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit chat</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="schedule-chat-form" onSubmit={handleEdit}>
                    <Form.Group className="mb-3" controlId="chatName">
                        <Form.Label>Chat Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="chatName"
                            placeholder="Enter chat name"
                            value={chatName || ''}
                            onChange={(e) => setChatName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Enter chat description"
                            value={chatDescription || ''}
                            onChange={(e) => setChatDescription(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="expireDate">
                        <Form.Label>Expiration Date and Time</Form.Label>
                        <Form.Control
                            type="text"
                            name="expireDate"
                            placeholder="DD/MM/YYYY HH:mm:ss"
                            value={chatExpireDate || moment().format('DD/MM/YYYY HH:mm:ss')}
                            onChange={(e) => setChatExpireDate(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <br/>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PopupModalEditChat;
