import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function LoginForm({ Login }) {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

        console.log(data.User)

		if (data.User) {
			localStorage.setItem('token', data.User)        //Vi lagrar lokal token i browsern för Auth
			alert('Login successful')
			navigate("/");
		} else {
			alert('Please check your username and password')
		}
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                <div className="form-grupp">
                    <label htmlFor="name">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                        <div className={"checkbox-password-wrap"}>
                        <input type="checkbox" id="keep-signed" name="signed-in" value="sign-in"/>
                        <label htmlFor="keep-signed">Keep me signed in</label>
                        </div>
                <input type="submit" value="Login" />
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default LoginForm