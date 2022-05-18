import React, { useState } from 'react';
import axios from "axios";

function LoginForm({ Login }) {
    const [details, setDetails] = useState({ uname: "", password: "" });
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
			const url = "http://localhost:3001/api/auth";
			const { details: res } = await axios.post(url, details);
			localStorage.setItem("token", res.details);
			window.location = "/";
            Login(details);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.details.message);
			}
		}
    }

	const handleChange = ({ currentTarget: input }) => {
		setDetails({ ...details, [input.name]: input.value });
	};

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                <div className="form-grupp">
                    <label htmlFor="name">User Name:</label>
                    <input type="text" name="name" id="name" onChange={e => handleChange({ ...details, uname: e.target.value })} value={details.uname} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => handleChange({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default LoginForm