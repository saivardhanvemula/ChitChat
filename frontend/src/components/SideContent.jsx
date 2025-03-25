import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import { ConversationItem } from "./ConversationItem";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const [conversations, setconversations] = useState([
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
    ]);
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton
                        onClick={() => {
                            navigate("/app/users");
                        }}
                    >
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("/app/groups");
                        }}
                    >
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            navigate("/app/create-group");
                        }}
                    >
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-box"
                />
            </div>
            <div className="sb-conversations">
                {conversations.map((conversation, index) => (
                    <ConversationItem
                        key={index}
                        props={conversation}
                        
                    />
                ))}
            </div>
        </div>
    );
};
