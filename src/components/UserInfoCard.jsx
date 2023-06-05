// import Card from 'react-bootstrap/Card';
// import UserDefaultAvatar from "../assets/default-user-avatar.png";
// import Button from "react-bootstrap/Button";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
// import axios from "axios";
// import React, {Component} from "react";
//
//
//
// class UserInfoCard extends Component(){
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             userInfo: null,
//             isLoading: true,
//         };
//     }
//
//     componentDidMount() {
//         this.fetchCurrentUser();
//         this.start();
//     }
//
//     fetchCurrentUser = () => {
//         const url = `http://localhost:8080/user/current`;
//
//         axios.get(url)
//             .then((response) => {
//                 const {data} = response.data;
//                 console.log(data)
//                 this.setState({userInfo: data});
//             })
//             .catch((error) => {
//                 console.error('Request error: ' + error);
//             });
//     }
//
//     render() {
//         const {userInfo, isLoading} = this.state;
//
//         if (isLoading) {
//             return(
//                 <Card className={"user-info-card"}>
//                     <div className="loading-container">
//                         <Spinner animation="border" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </Spinner>
//                     </div>
//                 </Card>
//             )
//         }
//
//         return (
//             <Card className={"user-info-card"}>
//                 <Card.Img variant="top" src={UserDefaultAvatar} className={"login-user-avatar avatar"}/>
//                 <Card.Body>
//                     <Card.Title><strong>User name</strong></Card.Title>
//                     <Card.Text>
//                         email@example.com
//                     </Card.Text>
//                     <Button variant="text" style={{color : '#0d6efd'}}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Button>
//                 </Card.Body>
//             </Card>
//         )
//     }
// }
//
// export default UserInfoCard;

import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {Spinner} from "react-bootstrap";



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