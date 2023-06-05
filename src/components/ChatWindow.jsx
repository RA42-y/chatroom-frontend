import React, {Component} from 'react';
import MemberCard from "./MemberCard";
import axios from "axios";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import ChatOperationDropdown from "./ChatOperationDropdown";
import MemberList from "./MemberList";
import {faPaperPlane, faPencil, faRightFromBracket, faUserPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MessageSent from "./MessageSent";
import MessageReceived from "./MessageReceived";


class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChat: this.props.selectedChat,
            chatInfo: null,
            isLoading: true,
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
            })
            .catch((error) => {
                console.error('Request error: ' + error);
            });
    }

    render() {
        const {chatInfo, isLoading} = this.state;

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
                    <Col sm={11} >
                        <h3><strong>{chatInfo.name}</strong></h3>
                    </Col>
                    <Col sm={1}>
                        <ChatOperationDropdown chatId={chatInfo.id}/>
                    </Col>
                </Row>
                <Row className={"chat-message-info"}>
                    <Col sm={8} className={"chat-message-window"}>
                        <Row className={"message-area"}>
                            <MessageSent message={"hello there"} timestamp={"10:30"}/>
                            <MessageReceived message={"general kenobi"} timestamp={"10:33"} sender={"sender"}/>
                        </Row>
                        <Row className={"message-form"}>
                            <Col sm={12} >
                                <Form>
                                    <Row>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Type your message here"/>
                                        </Col>
                                        <Col sm={2}>
                                            <Button variant="primary" type="submit">
                                                <FontAwesomeIcon icon={faPaperPlane} style={{width: '1.5em'}}/>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4} className={"member-info-column"}>
                        <Row>
                            <h5><strong>Creator</strong></h5>
                            <div>
                                <MemberCard id={chatInfo.creator.id} member={chatInfo.creator}/>
                            </div>
                        </Row>
                        <Row className={"member-list"}>
                            <h5 style={{marginTop: '1em'}}><strong>Members</strong></h5>
                            <MemberList members={chatInfo.members}/>
                        </Row>
                        {/*<Row>*/}
                        {/*    <Button className={"edit-member-btn"} style={{marginTop: '1em'}}>*/}
                        {/*        <FontAwesomeIcon icon={faUserPen} style={{width: '1.5em', marginLeft:'-0.45em', fontSize: '1.2em'}}/>*/}
                        {/*    </Button>*/}
                        {/*</Row>*/}
                    </Col>
                </Row>
            </div>
        );

    }
}

export default ChatWindow;