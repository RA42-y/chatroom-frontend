import React, {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import InviteUserList from "../chatOperation/InviteUserList";

const PopupModalInviteUser = ({show, handleClose, chatId}) => {
    const [users, setUsers] = useState({});

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
        <Modal show={show} onHide={handleClose} centered className={"modal-invite-user"}>
            <Modal.Header closeButton>
                <Modal.Title>Invite user</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{maxHeight: '70vh', overflow: 'scroll'}}>
                <InviteUserList users={users} chatId={chatId}/>
            </Modal.Body>
        </Modal>
    );
};

export default PopupModalInviteUser;
