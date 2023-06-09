import React, {Component} from 'react';
import MemberCard from "./MemberCard";
import axios from "axios";
import {Col, Row, Spinner} from "react-bootstrap";
import ChatOperationDropdown from "../chatOperation/ChatOperationDropdown";
import MemberList from "./MemberList";
import MessageArea from "./MessageArea";


class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChat: this.props.selectedChat,
            chatInfo: null,
            isLoading: true,
            userRole: ''
        };
    }

    componentDidMount() {
        this.fetchChatInfo();
    }

    fetchChatInfo = () => {
        const {selectedChat} = this.state

        const url = `http://localhost:8080/chat/chat-info/${selectedChat}`;

        axios.get(url)
            .then((response) => {
                const {data} = response.data;
                console.log(data)
                this.setState({chatInfo: data, isLoading: false});
                if (data.creator.email === localStorage.getItem("loginUserEmail")) {
                    this.setState({userRole: 'creator'});
                } else {
                    this.setState({userRole: 'member'});
                }
            })
            .catch((error) => {
                console.error('Request error: ' + error);
            });
    }

    render() {
        const {chatInfo, isLoading, userRole} = this.state;

        if (isLoading) {
            return (
                <div className={"chat-window"}>
                    <div className="loading-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            );
        }

        return (
            <div className={"chat-window"}>
                <Row className={"chat-window-header"}>
                    <Col sm={11}>
                        <h3><strong>{chatInfo.name}</strong></h3>
                    </Col>
                    <Col sm={1}>
                        <ChatOperationDropdown chatId={chatInfo.id} userRole={userRole}/>
                    </Col>
                </Row>
                <Row className={"chat-message-info"}>

                    {!chatInfo.expireDate || new Date(chatInfo.expireDate) > new Date() ? (
                        <MessageArea chatId={chatInfo.id}/>
                    ) : <Col sm={8} className={"chat-message-window d-flex align-items-center"}><p className="m-auto" style={{color: 'dimgray'}}>This chat has been expired.</p></Col>}

                    <Col sm={4} className={"member-info-column"} style={{overflow: 'scroll'}}>
                        <Row>
                            <h5><strong>Create date</strong></h5>
                            <div>
                                <p style={{fontSize: 'smaller'}}>{chatInfo.createDate ? new Date(chatInfo.createDate).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }) : ''}</p>
                            </div>
                        </Row>
                        <Row style={{marginTop: '1em'}}>
                            <h5><strong>Expire date</strong></h5>
                            <div>
                                <p style={{fontSize: 'smaller'}}>{chatInfo.expireDate ? new Date(chatInfo.expireDate).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' }) : ''}</p>
                            </div>
                        </Row>
                        <Row style={{marginTop: '1em'}}>
                            <h5><strong>Creator</strong></h5>
                            <div>
                                <MemberCard id={chatInfo.creator.id} member={chatInfo.creator}/>
                            </div>
                        </Row>
                        <Row className={"member-list"} style={{marginTop: '1em'}}>
                            <h5><strong>Members</strong></h5>
                            <MemberList members={chatInfo.members}/>
                        </Row>
                    </Col>
                </Row>
            </div>
        );

    }
}

export default ChatWindow;
