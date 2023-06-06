import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ScheduleChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, description} = this.state;

        const url = 'http://localhost:8080/chat/create-chat'
        const token = localStorage.getItem("token");

        axios.post(url, {name, description}, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                console.log('Chat created successfully:', response.data);
                this.setState({name: '', description: ''});
            })
            .catch((error) => {
                // Handle error
                console.error('Error creating chat:', error);
            });
    };

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const {name, description} = this.state;

        return (
            <main>
                <Form id="schedule-chat-form" onSubmit={this.handleSubmit}>
                    <h2>
                        <strong>Schedule a chat</strong>
                    </h2>
                    <Form.Group className="mb-3" controlId="chatName">
                        <Form.Label>Chat Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter chat name"
                            value={name}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Enter chat description"
                            value={description}
                            onChange={this.handleInputChange}
                        />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">
                        Create Chat
                    </Button>
                </Form>
            </main>
        );
    }
}

export default ScheduleChatPage;
