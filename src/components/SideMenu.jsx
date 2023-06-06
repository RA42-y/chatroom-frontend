import {Nav, NavLink, Tab} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faPlusSquare, faUser, faCommenting} from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";
import AppIcon from "../assets/pictures/app-icon.png"
import {useNavigate} from "react-router-dom";
import UserInfoCard from "./UserInfoCard";

function SideMenu() {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('chats');

    const handleTabChange = (eventKey) => {
        setActiveTab(eventKey);
        navigate(`/${eventKey}`);
    };

    return (
        <aside id={"side-menu"}>
            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                <div className="d-flex flex-row align-items-center mb-4 mt-3">
                    <img src={AppIcon} alt="App Icon" className="mx-3 app-icon"/>
                    <h1><strong>Chatroom</strong></h1>
                </div>
                <Nav variant="pills" className="flex-column" >
                    <Nav.Item>
                        <NavLink to="/chats" eventKey="chats">
                            <FontAwesomeIcon icon={faUser}/> My Chats
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/created-chats" eventKey="created-chats">
                            <FontAwesomeIcon icon={faCommenting}/> Created Chats
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/joined-chats" eventKey="joined-chats">
                            <FontAwesomeIcon icon={faComments}/> Joined Chats
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/schedule-chat-form" eventKey="schedule-chat-form">
                            <FontAwesomeIcon icon={faPlusSquare}/> Schedule a Chat
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Tab.Container>
            <UserInfoCard/>
        </aside>
    );
}

export default SideMenu;