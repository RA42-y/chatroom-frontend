import React, {Component} from 'react';
import MemberCard from "./MemberCard";
import axios from "axios";
import {Spinner} from "react-bootstrap";

class ChatInfo extends Component {

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
                <div className={"chat-info"}>
                    <div className="loading-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            );
        }

        return (
            <div className="chat-info">
                <h3><strong>{chatInfo.name}</strong></h3>
                <p>{chatInfo.description}</p>
                <h4 style={{marginTop: '1em'}}><strong>Creator</strong></h4>
                <MemberCard id={chatInfo.creator.id} member={chatInfo.creator}/>
                <h4 style={{marginTop: '1em'}}><strong>Members</strong></h4>
                {chatInfo.members.map(member => (
                    <MemberCard key={member.id} id={member.id} member={member} />
                ))}
            </div>
        );

    }
}

export default ChatInfo;
