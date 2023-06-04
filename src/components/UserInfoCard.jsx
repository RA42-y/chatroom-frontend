import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



function UserInfoCard (){

    return (
        <Card className={"user-info-card"}>
            <Card.Img variant="top" src={UserDefaultAvatar} className={"login-user-avatar avatar"}/>
            <Card.Body>
                <Card.Title><strong>User name</strong></Card.Title>
                <Card.Text>
                    email@example.com
                </Card.Text>
                <Button variant="text" style={{color : '#0d6efd'}}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Button>
            </Card.Body>
        </Card>
    );
}

export default UserInfoCard;