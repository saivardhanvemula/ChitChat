import React,{useState} from "react";
import { ChatArea } from "./ChatArea";
import { Welcome } from "./Welcome";

import { Sidebar } from "./SideContent";
import { CreateGroups } from "./CreateGroups";
// import { Users_Groups } from "./Users_Groups";
import { Outlet } from "react-router-dom";
export const MainContainer = () => {
    const [conversations, setconversations] = useState([
            { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
            { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
            { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
        ]);
    return (
        
        <div className="MainContainer">
            <Sidebar />

            <Outlet/>
            {/* <CreateGroups/> */}
            {/* <Welcome/> */}
            {/* <WorkArea /> */}
            {/* <ChatArea props={conversations[0]}  /> */}
            {/* <Users_Groups/> */}
        </div>
    );
};
