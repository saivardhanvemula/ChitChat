import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ConversationItem } from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

export const Sidebar = () => {
    const [conversations, setconversations] = useState([
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
        { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
    ]);
    const navigate = useNavigate();
    // const [lightTheme, setlightTheme] = useState(true);
    const lightTheme = useSelector((state) => state.themeKey);
    // console.log(lightTheme)
    const dispatch = useDispatch();
    return (
        <div className="sidebar">
            <div className={"sb-header" + (lightTheme ? " " : " dark")}>
                    <div className="other-icons">
                        <IconButton>
                            <AccountCircleIcon
                                className={
                                    "icon" + (lightTheme ? " " : " dark")
                                }
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                navigate("/app/users");
                            }}
                        >
                            <PersonAddIcon
                                className={
                                    "icon" + (lightTheme ? " " : " dark")
                                }
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                navigate("/app/groups");
                            }}
                        >
                            <GroupAddIcon
                                className={
                                    "icon" + (lightTheme ? " " : " dark")
                                }
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                navigate("/app/create-group");
                            }}
                        >
                            <AddCircleIcon
                                className={
                                    "icon" + (lightTheme ? " " : " dark")
                                }
                            />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                dispatch(toggleTheme());
                            }}
                        >
                            {lightTheme && (
                                <NightlightIcon
                                    className={
                                        "icon" + (lightTheme ? " " : " dark")
                                    }
                                />
                            )}
                            {!lightTheme && (
                                <LightModeIcon
                                    className={
                                        "icon" + (lightTheme ? " " : " dark")
                                    }
                                />
                            )}
                        </IconButton>
                    </div>
            </div>
            <div className={"sb-search" + (lightTheme ? " " : " dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    placeholder="Search"
                    className={"search-box" + (lightTheme ? " " : " dark")}
                />
            </div>
            <div className={"sb-conversations" + (lightTheme ? " " : " dark")}>
                {conversations.map((conversation, index) => (
                    <ConversationItem key={index} props={conversation} />
                ))}
            </div>
        </div>
    );
};
