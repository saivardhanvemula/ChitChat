import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

import { ConversationItem } from "./ConversationItem";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sb-header">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sb-search">
                <IconButton>
                <SearchIcon/>
                </IconButton>
                <input type="text" placeholder="Search" className="search-box"/>
            </div>
            <div className="sb-conversations">
                <ConversationItem/>
                <ConversationItem/>
                <ConversationItem/>
                <ConversationItem/>
                <ConversationItem/>
                <ConversationItem/>
                <ConversationItem/>
            </div>
        </div>
    );
};
