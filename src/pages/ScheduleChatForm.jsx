import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import DateTimePicker from 'react-datetime';
import moment from "moment";

class ScheduleChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            expireDate: moment().format('DD/MM/YYYY HH:mm:ss'),
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, description, expireDate} = this.state;

        if (!moment(expireDate, 'DD/MM/YYYY HH:mm:ss', true).isValid()) {
            console.error('Invalid date format');
            return;
        }

        const url = 'http://localhost:8080/chat/create-chat'
        const token = localStorage.getItem("token");

        axios.post(url, {name, description, expireDate}, {headers: {"Authorization": `Bearer ${token}`}})
            .then((response) => {
                console.log('Chat created successfully:', response.data);
                localStorage.setItem('alertMessage', `Chat "${name}" created successfully.`);
                localStorage.setItem('alertType', 'success');
                this.setState({name: '', description: ''});
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error creating chat:', error);
                localStorage.setItem('alertMessage', `Error creating chat: The expiration date and time must be after the current time.`);
                localStorage.setItem('alertType', 'danger');
                window.location.reload();
            });
    };

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const {name, description, expireDate} = this.state;

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
                            required
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
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="expireDate">
                        <Form.Label>Expiration Date and Time</Form.Label>
                        <Form.Control
                            type="text"
                            name="expireDate"
                            placeholder="DD/MM/YYYY HH:mm:ss"
                            value={expireDate}
                            onChange={this.handleInputChange}
                            required
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
