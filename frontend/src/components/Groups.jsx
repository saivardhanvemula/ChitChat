import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

export const Groups = () => {
    const lightTheme = useSelector((state) => state.themeKey);
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{opacity:1,scale:1}}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease:"anticipate",
                    duration:".3"
                }}
                className="list-container"
            >
                <div className={"ug-header " + (lightTheme ? " " : " dark")}>
                    <p className="ug-title">Online Groups</p>
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
                <div className={"ug-list" + (lightTheme ? " " : " dark")}>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="list-tem"
                    >
                        <p className="con-icon">T</p>
                        <p className="con-titile">Test Group</p>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
