import React from "react";
import NavBar from "../components/navbar";
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
            <header className="App-header">
                <NavBar/>
            </header>

            <div className="container">

                <div className="text-block">
                    <h2 className = "login-text">Log in</h2>
                    <input text="Email" placeholder="Email"/>
                    <br/>
                    <input text="Password" placeholder="Password"/>
                    <br/>
                    <div className={"checkbox-password-wrap"}>
                    <input type="checkbox" id="keep-signed" name="signed-in" value="sign-in"/>
                    <label htmlFor="keep-signed">Keep me signed in</label>
                    </div>
                    <div className="login-button">
                        <a href="#" className="button-text">Log In</a>
                    </div>

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