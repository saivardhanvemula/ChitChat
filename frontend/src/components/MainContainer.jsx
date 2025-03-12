import React from "react";
import { ChatArea } from "./ChatArea";

import { Sidebar } from "./SideContent";
export const MainContainer = () => {
    return (
        <div className="MainContainer">
            <Sidebar />
            {/* <WorkArea /> */}
            <ChatArea/>
        </div>
    );
};
