import Card from 'react-bootstrap/Card';
import ChatIcon from "../assets/app-icon.png"
import UserDefaultAvatar from "../assets/default-user-avatar.png";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";


function UserInfoCard (){

    return (
        // <div className="d-flex align-items-center justify-content-end mt-4 flex-column">
        //     <img src={UserDefaultAvatar} className="mr-2 avatar user-avatar"/>
        //     <span><strong>Username</strong></span>
        //     <button className="btn btn-link ml-3" onClick={onLogout}>
        //         Logout
        //     </button>
        // </div>

        <Card className={"user-info-card"}>
            <Card.Img variant="top" src={UserDefaultAvatar} className={"login-user-avatar avatar"}/>
            <Card.Body>
                <Card.Title><strong>User name</strong></Card.Title>
                <Card.Text>
                    email@example.com
                </Card.Text>
                <Button variant="text" style={{color : '#0d6efd'}}><FontAwesomeIcon icon={faArrowAltCircleRight} /> Logout</Button>
            </Card.Body>
        </Card>
    );
}

export default UserInfoCard;