import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ChatCard from '../components/ChatCard';
import CustomPagination from '../components/Pagination';
import axios from "axios";
import {Spinner} from "react-bootstrap";


class CreatedChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChat: null,
            currentPage: 0,
            totalPages: 1,
            chats: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchChats();
    }

    handleChatClick = (id) => {
        this.setState({selectedChat: id});
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page}, () => {
            this.fetchChats();
        });
    };

    fetchChats = () => {
        const {currentPage} = this.state;
        const size = 7;
        const url = `http://localhost:8080/chat/chat-list?page=${currentPage}&size=${size}`;

        // Make the API request using Axios
        axios.get(url)
            .then((response) => {
                const {data} = response.data;
                console.log(data)
                const {content, totalPages} = data;
                this.setState({chats: content, totalPages, isLoading: false});
                console.log(content)
            })
            .catch((error) => {
                console.error('Request error: ' + error);
            });
    };


    render() {
        const {selectedChat, currentPage, totalPages, chats, isLoading} = this.state;

        if (isLoading) {
            return (
                <div className="loading-container">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            );
        }

        const pageSize = 7;
        // const startIndex = (currentPage - 1) * pageSize;
        const startIndex = (currentPage) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedChats = chats.slice(startIndex, endIndex);

        return (
            <Row>
                <Col sm={4} className="chats-list">
                    <h2>
                        <strong>Created Chats</strong>
                    </h2>
                    {chats.map((chat, idx) => (
                        <Row key={idx}>
                            <ChatCard id={chat.id} onClick={this.handleChatClick} chatName={chat.name}
                                      description={chat.description}/>
                        </Row>
                    ))}
                    <br/>
                    <CustomPagination currentPage={currentPage} totalPages={totalPages}
                                      onPageChange={this.handlePageChange}/>
                </Col>
                <Col className="chat-info-container">
                    {selectedChat !== null && (
                        <div className="chat-info">
                            <h2>Chat {selectedChat} Information</h2>
                        </div>
                    )}
                </Col>
            </Row>
        );
    }
}

export default CreatedChatsList;
