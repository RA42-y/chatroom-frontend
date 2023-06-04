import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown, faPenToSquare, faTrash, faRightFromBracket, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const ChatOperationDropdown = ({chatId}) => {
    const handleEdit = () => {
        axios.put(`http://localhost:8080/chat/edit-chat/${chatId}`)
            .then(response => {
                console.log('Edit request success:', response.data);
            })
            .catch(error => {
                console.error('Edit request error:', error);
            });
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/chat/delete-chat/${chatId}`)
            .then(response => {
                console.log('Delete request success:', response.data);
            })
            .catch(error => {
                console.error('Delete request error:', error);
            });
    };

    const handleQuit = () => {
        axios.post(`http://localhost:8080/chat/quit-chat/${chatId}`)
            .then(response => {
                console.log('Quit request success:', response.data);
            })
            .catch(error => {
                console.error('Quit request error:', error);
            });
    };

    return (
        <div className="chat-info-dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="light" className="chat-info-dropdown-btn hide-dropdown-arrow">
                    <FontAwesomeIcon icon={faEllipsis} className="dropdown-icon" style={{marginLeft: '-0.2em'}}/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="chat-info-dropdown-menu">
                    <Dropdown.Item onClick={handleEdit} className="dropdown-operation-item dropdown-edit-item">
                        <FontAwesomeIcon icon={faPenToSquare} className="dropdown-icon"/>
                        <span className="dropdown-text">Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleDelete} className="dropdown-operation-item dropdown-delete-item">
                        <FontAwesomeIcon icon={faTrash} className="dropdown-icon" style={{color: 'red'}}/>
                        <span className="dropdown-text" style={{color: 'red'}}>Delete</span>
                    </Dropdown.Item>
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