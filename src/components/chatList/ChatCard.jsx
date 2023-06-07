import Card from 'react-bootstrap/Card';
import ChatIcon from "../../assets/pictures/chat-icon.png"

function ChatCard(props) {
    const { chatName, description } = props;

    return (
        <Card className={'chat-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={ChatIcon} alt="chat-icon" className={"avatar chat-icon"} style={{ marginRight: '1em'}}/>
                    <div className={"flex-column"}>
                        <Card.Title>{chatName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ChatCard;