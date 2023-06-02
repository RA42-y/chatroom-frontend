import Container from 'react-bootstrap/Container';
import SideMenu from "../components/SideMenu";
import '../components/Components.css'

function Home() {
    return (
        <Container fluid id={"main-container"}>
            <SideMenu/>
        </Container>
    );
}

export default Home;