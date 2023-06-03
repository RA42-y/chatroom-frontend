import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class ScheduleChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatName: '',
            description: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {chatName, description} = this.state;

        axios.post('/chat/create-chat', {chatName, description})
            .then((response) => {
                // Handle successful response
                console.log('Chat created successfully:', response.data);
                // Reset form values
                this.setState({chatName: '', description: ''});
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
        const {chatName, description} = this.state;

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
                            name="chatName"
                            placeholder="Enter chat name"
                            value={chatName}
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

export default ScheduleChatForm;
