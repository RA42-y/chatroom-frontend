import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import axios from 'axios';

const PopupModalEditChat = ({show, handleClose, chatId}) => {
    const [chatName, setChatName] = useState('');
    const [chatDescription, setChatDescription] = useState('');

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

        axios.post(url, {name: chatName, description: chatDescription}, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                console.log('Chat edited successfully:', response.data);
                handleClose();
                window.location.reload();
            })
            .catch((error) => {
                // Handle error
                console.error('Error editing chat:', error);
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
