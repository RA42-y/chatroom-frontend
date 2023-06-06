import React, {Component} from 'react';
import ChatsListPagination from '../components/ChatsListPagination';
import axios from "axios";
import {Spinner} from "react-bootstrap";
import ChatsList from "../components/ChatsList";
import ChatWindow from "../components/ChatWindow";


class CreatedChatsListPage extends Component {
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

    fetchChats = () => {
        const {currentPage} = this.state;
        const size = 5;
        const url = `http://localhost:8080/chat/created-chat-list?page=${currentPage}&size=${size}`;
        const token = localStorage.getItem("token");
        console.log(token);

        // Make the API request using Axios
        axios.get(url, {headers: {"Authorization": `Bearer ${token}`}})
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

    handleChatCardClick = (id) => {
        this.setState({selectedChat: id}, () => {
            console.log(this.state.selectedChat);
        });
    };

    handlePageChange = (page) => {
        this.setState({currentPage: page}, () => {
            this.fetchChats();
        });
    };

    render() {
        const {selectedChat, currentPage, totalPages, chats, isLoading} = this.state;

        if (isLoading) {
            return (
                <div>
                    {/*<SideMenu/>*/}
                    <main>
                        <div className="chats-list">
                            <h2>
                                <strong>Created Chats</strong>
                            </h2>
                            <div className="loading-container">
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </div>
                    </main>
                </div>
            );
        }

        return (
            <div className={"my-container"}>
                {/*<SideMenu/>*/}
                <main>
                    <div className="chats-list">
                        <h2>
                            <strong>Created Chats</strong>
                        </h2>
                        <ChatsList chats={chats} onChatCardClick={this.handleChatCardClick}/>
                        <br/>
                        <ChatsListPagination currentPage={currentPage} totalPages={totalPages}
                                             onPageChange={this.handlePageChange}/>
                    </div>
                    <div className="chat-info-container">
                        {selectedChat !== null && (
                            <ChatWindow key={selectedChat} selectedChat={selectedChat}/>
                        )}
                    </div>
                </main>
            </div>
        );
    }
}

export default CreatedChatsListPage;
