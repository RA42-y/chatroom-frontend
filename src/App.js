import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import CreatedChatsList from "./pages/CreatedChatsList";
import ScheduleChatForm from "./pages/ScheduleChatForm";
import JoinedChatsList from "./pages/JoinedChatsList";

function App() {
    return (
        <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Router>
                    <SideMenu/>
                    <Routes>
                        <Route path="/created-chats" element={<CreatedChatsList/>}/>
                        <Route path="/joined-chats" element={<JoinedChatsList/>}/>
                        <Route path="/schedule-chat-form" element={<ScheduleChatForm/>}/>
                    </Routes>
                </Router>
            </div>
            <footer>
                <p>SR03 P23 - Chatroom - Jieni YU & Zhuzexuan SHI</p>
            </footer>
        </div>
    );
}

export default App;
