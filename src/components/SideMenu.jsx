import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Col, Nav, Row, Tab} from 'react-bootstrap';
import CreatedChatsList from "../pages/CreatedChatsList";
import JoinedChatsList from "../pages/JoinedChatsList";
import ScheduleChatForm from "../pages/ScheduleChatForm";
import AppIcon from "../assets/chat-icon.png"
import UserDefaultAvatar from "../assets/default-user-avatar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faPlusSquare, faUser} from '@fortawesome/free-regular-svg-icons'
import UserInfoCard from "./UserInfoCard";


function SideMenu() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('created-chats');

    const handleTabChange = (eventKey) => {
        setActiveTab(eventKey);
        navigate(`/${eventKey}`);
    };

    const onLogout = async () => {
        try {
            // Make a request to the backend "/logout" endpoint
            const response = await fetch('/login/logout', {
                method: 'GET', // or 'GET', 'PUT', 'DELETE', depending on your backend setup
                // Add any necessary headers or request body here
            });

            if (response.ok) {
                // Logout successful
                // Perform any additional actions, such as clearing user data or redirecting
                console.log('Logout successful');
            } else {
                // Handle logout failure
                console.error('Logout failed');
            }
        } catch (error) {
            // Handle any network or server errors
            console.error('Error occurred while logging out', error);
        }
    };

    return (
        <Tab.Container id="side-menu" activeKey={activeTab} onSelect={handleTabChange}>
                <Row>
                    <Col sm={3} id={'side-menu'}>
                        <div className="d-flex flex-row align-items-center mb-4 mt-3">
                            <img src={AppIcon} alt="App Icon" className="mx-3 app-icon"/>
                            <h1><strong>Chatroom</strong></h1>
                        </div>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="created-chats" className={activeTab === 'created-chats' ? 'custom-active-nav' : ''}>
                                    <FontAwesomeIcon icon={faUser} /> Created Chats
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="joined-chats"><FontAwesomeIcon icon={faComments} /> Joined Chats</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="schedule-chat-form"><FontAwesomeIcon icon={faPlusSquare} /> Schedule a Chat</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <UserInfoCard/>
                    </Col>
                    <Col sm={9} className={"right-container"}>
                        <Tab.Content>
                            <Tab.Pane eventKey="created-chats">
                                <CreatedChatsList/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="joined-chats">
                                <JoinedChatsList/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="schedule-chat-form">
                                <ScheduleChatForm/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
    );
}

export default SideMenu;
