import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useSelector } from "react-redux";

export const Users = () => {
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <div className="list-container">
            <div className={"ug-header"+ (lightTheme ? " " : " dark")}>
                <p className="ug-title">Online Users</p>
            </div>
            <div className={"sb-search"+ (lightTheme ? " " : " dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input
                    type="text"
                    placeholder="Search"
                    className={"search-box"+ (lightTheme ? " " : " dark")}
                />
            </div>
            <div className={"ug-list"+ (lightTheme ? " " : " dark")}>
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
