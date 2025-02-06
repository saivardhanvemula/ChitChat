import React from "react";
import WorkArea from "./WorkArea";
import { Sidebar } from "./Sidebar";

export const MainContainer = () => {
    return (
        <div className="MainContainer">
            <Sidebar />
            <WorkArea />
        </div>
    );
};
