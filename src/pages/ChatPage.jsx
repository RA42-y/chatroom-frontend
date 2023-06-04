import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

class ChatPage extends Component {
    render() {
        return (
            <Container fluid>
                {/* Header */}
                <Row>
                    <Col>
                        <h2>Chat Name</h2>
                        <p>Chat Description</p>
                    </Col>
                </Row>

                {/* Side Column */}
                <Row>
                    <Col sm={4}>
                        <h4>Members</h4>
                        <ul>
                            <li>Member 1</li>
                            <li>Member 2</li>
                            <li>Member 3</li>
                        </ul>
                    </Col>

                    {/* Chat Messages */}
                    <Col sm={8}>
                        {/* Add your chat messages component here */}
                    </Col>
                </Row>

                {/* Bottom Input */}
                <Row>
                    <Col sm={12}>
                        <Form>
                            <Form>
                                <Row>
                                    <Col sm={9}>
                                        <Form.Control type="text" placeholder="Type your message"/>
                                    </Col>
                                    <Col sm={3}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ChatPage;
