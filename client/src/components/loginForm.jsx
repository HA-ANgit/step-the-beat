import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function LoginForm({ Login }) {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
			const url = "http://localhost:3001/api/login";
			const { details: res } = await axios.post(url, details);

            console.log(details)//Vi försöker hitta rätt variabel för att göra en true/false if-sats

            localStorage.setItem("token", res.details);

            const data = await res.json()

            if (data.status === 'OK') {
                alert("Login Sucessfull!");
                //navigate("/dashboard");			
                //window.location = "/";
            } else {
                alert("Please check your username and password!");
            }

			localStorage.setItem("token", res.details);

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
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={details.password} />
                </div>
                        <div className={"checkbox-password-wrap"}>
                        <input type="checkbox" id="keep-signed" name="signed-in" value="sign-in"/>
                        <label htmlFor="keep-signed">Keep me signed in</label>
                        </div>
                <input type="submit" value="LOGIN" />
            </div>
            {error && <div>{error}</div>}
        </form>
    )
}

export default LoginForm