import React, {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import InviteUserList from "./InviteUserList";

const PopupModalInviteUser = ({show, handleClose, chatId}) => {
    const [users, setUsers] = useState({});
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const fetchUserList = () => {
            const url = `http://localhost:8080/user/all-user-list`;
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
    }, []);


    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Invite user</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InviteUserList users={users} chatId={chatId}/>
            </Modal.Body>
        </Modal>
    );
};

export default PopupModalInviteUser;
