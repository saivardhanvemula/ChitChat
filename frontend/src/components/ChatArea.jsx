import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { MessageSelf } from "./MessageSelf";
import MessageOthers from "./MessageOthers";
import React from "react";

export const ChatArea = (props) => {
    console.log(props);
    return (
        <div className="chatArea-container">
            <div className="chatArea-header">
                <p className="con-icon">{props.name}</p>
                <div className="header-text">
                    <p className="con-title">{props.name}</p>
                    <p className="con-timeStamp">{props.timeStamp}</p>
                </div>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div className="message-container">
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
                <MessageOthers />
                <MessageSelf />
            </div>
            <div className="text-input-area">
                <input
                    type="text"
                    placeholder="Type a Message"
                    className="search-box"
                />
                <IconButton>
                    <SendIcon />
                </IconButton>
            </div>
        </div>
    );
};
