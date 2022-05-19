import React from "react";
import NavBar from "../components/navbar";
import { Link } from 'react-router-dom';
import LoginForm from "../components/loginForm";

const LogIn = () => {
    return (
        <div>
            <header className="App-header">
                <NavBar/>
            </header>

            <div className="container">
                <LoginForm/>
                <div className="text-block">

                    <h4 className="no-account">Need to create a new account?</h4>

                    <div className="create-account-button">
                        <a href="/CreateUser" className="button-text">Create Account</a>
                        <p className={"forgot-password"}>Forgot password?</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LogIn;