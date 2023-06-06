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
import PopupModalEditChat from "./PopupModalEditChat";
import PopupModalInviteUser from "./PopupModalInviteUser";

const ChatOperationDropdown = ({chatId, userRole}) => {

    const [showModalEditChat, setShowModalEditChat] = useState(false);
    const [showModalInviteUser, setShowModalInviteUser] = useState(false);

    const handleRemove = () => {
        const url =`http://localhost:8080/chat/remove-user/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.put(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('User removed successfully:', response.data);
            })
            .catch(error => {
                console.error('Error removing user:', error);
            });
    };

    const handleDelete = () => {
        const url =`http://localhost:8080/chat/delete-chat/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.delete(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('Chat deleted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error deleting chat:', error);
            });
    };

    const handleQuit = () => {
        const url =`http://localhost:8080/chat/quit-chat/${chatId}`
        const token = localStorage.getItem("token");
        console.log(token);

        axios.post(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                console.log('Chat quit successfully:', response.data);
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
                        <Dropdown.Item onClick={handleRemove} className="dropdown-operation-item dropdown-edit-item">
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