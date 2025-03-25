import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export const Users = () => {
    return (
        <div className="list-container">
            <div className="ug-header">
                <p className="ug-title">Online Users</p>
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
            <div className="ug-list">
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
                <div className="list-tem">
                    <p className="con-icon">T</p>
                    <p className="con-titile">Test User</p>
                </div>
            </div>
        </div>
    );
};
