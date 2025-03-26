import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { MessageSelf } from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import React from "react";
import { useSelector } from "react-redux";

export const ChatArea = (props) => {
    const lightTheme = useSelector((state) => state.themeKey);
    // console.log(props);
    return (
        <div className="chatArea-container">
            <div className={"chatArea-header " + (lightTheme ? " " : " dark")}>
                <p className="con-icon">{props.name}</p>
                <div className="header-text">
                    <p className="con-title">{props.name}</p>
                    <p className="con-timeStamp">{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className={"message-container"+ (lightTheme ? " " : " dark")}>
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>
            <div className={"text-input-area"+ (lightTheme ? " " : " dark")}>
                <input
                    type="text"
                    placeholder="Type a Message"
                    className={"search-box"+ (lightTheme ? " " : " dark")}
                />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};
