import { Button, TextField } from "@mui/material";
import React from "react";

export const Login = () => {
    return (
        <div className="login-container">
            <div className="image-container"></div>
            <div className="login-box">
                <p>Login to your account</p>
                <TextField
                    id="standard-basic"
                    label="Enter Username"
                    varient="outline"
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button varient="outlined">Login</Button>
            </div>
        </div>
    );
};
