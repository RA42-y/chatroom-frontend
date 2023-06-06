import React, {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import RemoveUserList from "./RemoveUserList";

const PopupModalRemoveUser = ({show, handleClose, chatId}) => {
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchUserList = () => {
            const url = `http://localhost:8080/chat/member-list/${chatId}`;
            axios
                .get(url)
                .then((response) => {
                    const {data} = response.data;
                    console.log(data);
                    setUsers(data);
                })
                .catch((error) => {
                    console.error('Request error: ' + error);
                });
        };

        fetchUserList();
    }, [chatId]);


    return (
        <Modal show={show} onHide={handleClose} centered className={"modal-remove-user"}>
            <Modal.Header closeButton>
                <Modal.Title>Remove user</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{maxHeight: '70vh', overflow: 'scroll'}}>
                <RemoveUserList users={users} chatId={chatId}/>
            </Modal.Body>
        </Modal>
    );
};

export default PopupModalRemoveUser;
