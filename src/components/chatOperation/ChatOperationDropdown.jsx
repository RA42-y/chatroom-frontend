import React, {useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faEllipsis,
    faPenToSquare,
    faRightFromBracket,
    faTrash,
    faUserMinus,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import PopupModalEditChat from "../modal/PopupModalEditChat";
import PopupModalInviteUser from "../modal/PopupModalInviteUser";
import PopupModalRemoveUser from "../modal/PopupModalRemoveUser";

const ChatOperationDropdown = ({chatId, userRole}) => {

    const [showModalEditChat, setShowModalEditChat] = useState(false);
    const [showModalInviteUser, setShowModalInviteUser] = useState(false);
    const [showModalRemoveUser, setShowModalRemoveUser] = useState(false);

    const handleDelete = () => {
        const url =`http://localhost:8080/chat/delete-chat/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.delete(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('Chat deleted successfully:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting chat:', error);
            });
    };

    const handleQuit = () => {
        const url =`http://localhost:8080/chat/quit-chat/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.get(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('Chat quit successfully:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error quitting chat:', error);
            });
    };

    const handleOpenModalEditChat = () => {
        setShowModalEditChat(true);
    };

    const handleCloseModalEditChat = () => {
        setShowModalEditChat(false);
    };

    const handleOpenModalInviteUser = () => {
        setShowModalInviteUser(true);
    };

    const handleCloseModalInviteUser = () => {
        setShowModalInviteUser(false);
    };

    const handleOpenModalRemoveUser = () => {
        setShowModalRemoveUser(true);
    };

    const handleCloseModalRemoveUser = () => {
        setShowModalRemoveUser(false);
    };


    if (userRole === "creator") {
        return (
            <div className="chat-info-dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="light" className="chat-info-dropdown-btn hide-dropdown-arrow">
                        <FontAwesomeIcon icon={faEllipsis} className="dropdown-icon" style={{marginLeft: '-0.5em'}}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="chat-info-dropdown-menu">
                        <Dropdown.Item onClick={handleOpenModalEditChat} className="dropdown-operation-item dropdown-edit-item">
                            <FontAwesomeIcon icon={faPenToSquare} className="dropdown-icon"/>
                            <span className="dropdown-text">Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleOpenModalInviteUser} className="dropdown-operation-item dropdown-edit-item">
                            <FontAwesomeIcon icon={faUserPlus} className="dropdown-icon"/>
                            <span className="dropdown-text">Invite</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleOpenModalRemoveUser} className="dropdown-operation-item dropdown-edit-item">
                            <FontAwesomeIcon icon={faUserMinus} className="dropdown-icon"/>
                            <span className="dropdown-text">Remove</span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleDelete} className="dropdown-operation-item dropdown-delete-item">
                            <FontAwesomeIcon icon={faTrash} className="dropdown-icon" style={{color: 'red'}}/>
                            <span className="dropdown-text" style={{color: 'red'}}>Delete</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <PopupModalInviteUser show={showModalInviteUser} handleClose={handleCloseModalInviteUser} chatId={chatId}/>
                <PopupModalRemoveUser show={showModalRemoveUser} handleClose={handleCloseModalRemoveUser} chatId={chatId}/>
                <PopupModalEditChat show={showModalEditChat} handleClose={handleCloseModalEditChat} chatId={chatId}/>

            </div>
        );
    }

    return (
        <div className="chat-info-dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="light" className="chat-info-dropdown-btn hide-dropdown-arrow">
                    <FontAwesomeIcon icon={faEllipsis} className="dropdown-icon" style={{marginLeft: '-0.5em'}}/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="chat-info-dropdown-menu">
                    <Dropdown.Item onClick={handleQuit} className="dropdown-operation-item dropdown-edit-item">
                        <FontAwesomeIcon icon={faRightFromBracket} className="dropdown-icon" style={{color: 'red'}}/>
                        <span className="dropdown-text" style={{color: 'red'}}>Quit</span>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default ChatOperationDropdown;