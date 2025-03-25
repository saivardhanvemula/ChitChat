import "./App.css";
import { MainContainer } from "./components/MainContainer";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./components/Welcome";
import { ChatArea } from "./components/ChatArea";
import { CreateGroups } from "./components/CreateGroups";
import { Groups } from "./components/Groups";
import { Users } from "./components/Users";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="app" element={<MainContainer />}>
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="chat" element={<ChatArea />} />
                    <Route path="users" element={<Users/>} />
                    <Route path="groups" element={<Groups />} />
                    <Route path="create-group" element={<CreateGroups/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
