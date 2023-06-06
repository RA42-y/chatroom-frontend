import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SideMenu from "./components/SideMenu";
import CreatedChatsListPage from "./pages/CreatedChatsListPage";
import ScheduleChatPage from "./pages/ScheduleChatForm";
import JoinedChatsListPage from "./pages/JoinedChatsListPage";
import ChatsListPage from "./pages/ChatsListPage";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("token");
        if (token) {
            localStorage.setItem("token", token);
            console.log(token)
        }
    }, []);

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
