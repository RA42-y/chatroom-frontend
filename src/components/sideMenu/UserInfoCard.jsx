import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../../assets/images/default-user-avatar.png";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket, faBook, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import React, {Component} from "react";
import {Spinner} from "react-bootstrap";


class UserInfoCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchCurrentUser();
    }

    fetchCurrentUser = () => {
        const url = `http://localhost:8080/user/current`;
        const token = localStorage.getItem("token");
        console.log(token);

        axios.get(url, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                const {data} = response.data;
                console.log(data)
                this.setState({userInfo: data, isLoading: false});
                localStorage.setItem("loginUserEmail", data.email);
            })
            .catch((error) => {
                console.error('Request error: ' + error);
            });
    };

    openNewTab = (url) => {
        window.open(url);
    };

    render() {
        const {userInfo, isLoading} = this.state;

        if (isLoading) {
            return (
                <Card className={"user-info-card"}>
                    <div className="loading-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </Card>
            )
        }

        return (
            <Card className={"user-info-card"}>
                <Card.Img variant="top" src={UserDefaultAvatar} className={"login-user-avatar avatar"}/>
                <Card.Body>
                    <Card.Title><strong>{userInfo.firstName} {userInfo.lastName}</strong></Card.Title>
                    <Card.Text>
                        {userInfo.email}
                    </Card.Text>
                    <Button variant="text" style={{color: '#0d6efd'}}><FontAwesomeIcon
                        icon={faRightFromBracket}/> Logout</Button>
                    <Button variant="text" style={{color: '#0d6efd'}} onClick={() => this.openNewTab('http://localhost:8080/doc.html#/home')}>
                        <FontAwesomeIcon icon={faBook}/> API documentation
                    </Button>
                    <Button variant="text" style={{color: '#0d6efd'}} onClick={() => this.openNewTab('http://localhost:8080/admin/user-list')}>
                        <FontAwesomeIcon icon={faScrewdriverWrench}/> Admin site
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default UserInfoCard;