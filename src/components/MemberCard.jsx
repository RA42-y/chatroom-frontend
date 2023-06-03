import Card from 'react-bootstrap/Card';
import UserDefaultAvatar from "../assets/default-user-avatar.png"

function MemberCard(props) {
    const { member } = props;

    return (
        <Card className={'member-card'}>
            <Card.Body>
                <div className="d-flex flex-row">
                    <img src={UserDefaultAvatar} className={"avatar user-avatar"} style={{ marginRight: '2em'}}/>
                    <div className={"flex-column"} style={{ textAlign: 'left'}}>
                        <Card.Title>{member.firstName} {member.lastName}</Card.Title>
                        <Card.Text>
                            {member.email}
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;