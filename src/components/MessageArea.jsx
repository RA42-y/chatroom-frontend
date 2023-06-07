import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import MessageJoin from "./MessageJoin";
import MessageLeave from "./MessageLeave";
import MessageOnline from "./MessageOnline";

class MessageArea extends Component {
    constructor(props) {
        super(props);
        this.messageRef = React.createRef();
        this.messageAreaRef = React.createRef();
        this.state = {
            chatId: this.props.chatId,
            messageList: [],
            userList: []
        };
        this.websocket = null;
        this.loginUserEmail = localStorage.getItem("loginUserEmail");
    }

    componentDidMount() {
        this.startWebSocket().then(r => console.log("Start a websocket connection..."));
    }

    componentWillUnmount() {
        this.closeWebSocket();
    }

    startWebSocket = async () => {
        const url = `ws://localhost:8080/websocket/${this.state.chatId}/${this.loginUserEmail}`;
        this.websocket = new WebSocket(url);

        this.websocket.onopen = () => {
            console.log("Establishing a websocket connection...");
        };

        this.websocket.onmessage = (event) => {
            this.handleMessage(event);
        };

        this.websocket.onerror = (event) => {
            console.log("Error in websocket..." + event + '\n');
        };

        this.websocket.onclose = () => {
            console.log("Close the websocket connection...");
        };
    }

    closeWebSocket = () => {
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    sendMessage = () => {
        const message = this.messageRef.current.value;
        if (message.trim() === "") {
            alert("Do not send empty message.");
            return;
        }
        this.messageRef.current.value = "";
        this.websocket.send(message);
    }

    handleMessage = (event) => {
        // Parse the received message as JSON
        const jsonMessage = JSON.parse(event.data);
        console.log(jsonMessage);

        // Access the properties of the JavaScript object
        const {type, email, message, timestamp} = jsonMessage;

        // Perform desired actions based on the message properties
        if (type === 'message') {
            console.log(`Received message from ${email}: ${message}`);
        } else if (type === 'online') {
            console.log(`${email} is online`);
        } else if (type === 'join') {
            console.log(`${email} has joined the chat`);
        } else if (type === 'leave') {
            console.log(`${email} has left the chat`);
        }

        this.setState(prevState => ({
            messageList: [
                ...prevState.messageList,
                {type, email, message, timestamp}
            ]
        }), () => {
            // Scroll to the bottom after the state has been updated and messages are rendered
            this.scrollToBottom();
        });
    };

    scrollToBottom = () => {
        if (this.messageAreaRef.current) {
            const scrollableElement = this.messageAreaRef.current;
            scrollableElement.scrollTop = scrollableElement.scrollHeight;
        }
    };

    render() {
        const {messageList} = this.state;

        return (
            <Col sm={8} className={"chat-message-window"}>
                <Row className={"message-area"} ref={this.messageAreaRef}>
                    {
                        messageList.map((message, index) => {
                            let key = `${message.type}-${index}`;

                            if (message.type === 'message') {
                                if (message.email !== this.loginUserEmail) {
                                    return <MessageReceived message={message.message} timestamp={message.timestamp}
                                                            sender={message.email}
                                                            key={key}/>;
                                } else {
                                    return <MessageSent message={message.message} timestamp={message.timestamp}
                                                        key={key}/>;
                                }
                            } else if (message.type === 'online') {
                                return <MessageOnline sender={message.email} key={key}/>;
                            } else if (message.type === 'join') {
                                return <MessageJoin sender={message.email} key={key}/>;
                            } else {
                                return <MessageLeave sender={message.email} key={key}/>;
                            }
                        })
                    }
                </Row>
                <Row className={"message-form"}>
                    <Col sm={12}>
                        <Form>
                            <Row>
                                <Col sm={10}>
                                    <Form.Control ref={this.messageRef} type="text"
                                                  placeholder="Type your message here"/>
                                </Col>
                                <Col sm={2}>
                                    <Button variant="primary">
                                        <FontAwesomeIcon icon={faPaperPlane} style={{width: '1.5em'}}
                                                         onClick={this.sendMessage}/>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default MessageArea;
