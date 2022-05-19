import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from '../components/navbar.jsx';
import Axios from 'axios'; //TODO Fick aldrig Axios att funka

const CreateUserPage = () => {
    
    const [uname, setUname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => { //Denna metod retunerar vårt objekt
		e.preventDefault();

        if (!uname) {   //Denna validerar data i state
            alert ('please add username')
            return
        } else if (!email) {
            alert ('please add email')
            return
        } else if (!password) {
            alert ('please add password')
            return
        } 

        const response = await fetch('http://localhost:3001/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				uname,
				email,
				password,
			}),
		})

		const data = await response.json()

        console.log(data.Status)

		if (data.Status === 'OK') {
			navigate('/login')
		} else {
            alert ('This Account already exists!')
            setError(error)
        }
	};

        /*Efter "create user"-metoden, setState / reset av form
            setDetails('')
            setEmail('')
            setPassword('')
    }*/

    /* const onSubmit = async (e) => {   //Denna hanterar vår onSubmit och validerar samt kallar på vår createUser
        if (!details.uname) {
            alert ('please add username')
            return
        } else if (!details.email) {
            alert ('please add email')
            return
        } else if (!details.password) {
            alert ('please add password')
            return
        } 
        createUser ({ details })
    } */
    
    return (
        <div> 
            <header className="App-header">
                <NavBar/>
            </header>
            <section className="createUser">
                <div className='container'>
                    <p>Allready got an account?</p>
                <Link to="/login">
					<button type="button">
						Sing In
					</button>
				</Link>
                </div>
                <div className="form-box">
                <form onSubmit={handleSubmit}>
						<h2>Create Account</h2>
                        <label htmlFor="username" className="uname">
                            <p>User Name:</p>
                                <input
                                    type="text"
                                    placeholder="Type in your Username"
                                    name="uname"
                                    onChange={(e) => setUname(e.target.value)}
                                    value={uname}
                                />
                         </label>
                         <label htmlFor="email" className="form-input">
                            <p>E-mail:</p>
                            <input
                                type="email"
                                placeholder="Type in prefered@email.com"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Password:</p>
                            <input
                                type="password"
                                placeholder="Type in a Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </label>
                        <br/><br/>
						{error && <div>{error}</div>}
						<button type="submit" value="Register">Sing Up</button>
					</form>
                </div>
            </section>
        </div>
    );
};

export default CreateUserPage;