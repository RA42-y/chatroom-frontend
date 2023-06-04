import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import CreatedChatsList from "./pages/CreatedChatsListPage";
import ScheduleChatForm from "./pages/ScheduleChatForm";
import JoinedChatsList from "./pages/JoinedChatsListPage";
import ChatsListPage from "./pages/ChatsListPage";
import CreatedChatsListPage from "./pages/CreatedChatsListPage";
import JoinedChatsListPage from "./pages/JoinedChatsListPage";

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
