import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png"

function MemberCard() {

    return (
        <Card className={'member-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={UserDefaultAvatar} className={"avatar user-avatar"} style={{ marginRight: '2em'}}/>
                    <div className={"flex-column"} style={{ textAlign: 'left'}}>
                        <Card.Title>Member name</Card.Title>
                        <Card.Text>
                            email@example.com
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;