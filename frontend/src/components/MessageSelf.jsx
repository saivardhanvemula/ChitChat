import React from "react";

export const MessageSelf = () => {
    var props2 = { name: "you", message: "This is a Sample Message" };
    return (
        <div className="self-message-container">
            <div className="messageBox">
                <p>{props2.message}</p>
                <p className="self-timeStamp">12:00am</p>
            </div>
        </div>
    );
};
