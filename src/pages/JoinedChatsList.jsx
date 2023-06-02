import Row from 'react-bootstrap/Row';
import ChatCard from "../components/ChatCard";

function JoinedChatsList() {
    return (
        <div>
            {Array.from({ length: 4 }).map((_, idx) => (
                <Row key={idx}>
                    <ChatCard/>
                </Row>
            ))}
        </div>
    );
}

export default JoinedChatsList;