import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import CreatedChatsListPage from "./pages/CreatedChatsListPage";
import ScheduleChatForm from "./pages/ScheduleChatForm";
import JoinedChatsListPage from "./pages/JoinedChatsListPage";
import ChatsListPage from "./pages/ChatsListPage";
import ChatPage from "./pages/ChatPage";
import ScheduleChatPage from "./pages/ScheduleChatForm";

function App() {
    return (
        <div className="" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Router>
                    <SideMenu/>
                    <Routes>
                        <Route path="/chats" element={<ChatsListPage/>}/>
                        <Route path="/created-chats" element={<CreatedChatsListPage/>}/>
                        <Route path="/joined-chats" element={<JoinedChatsListPage/>}/>
                        <Route path="/schedule-chat-form" element={<ScheduleChatPage/>}/>
                        <Route path="/chat" element={<ChatPage/>}/>
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
