import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import NavBar from '../components/navbar.jsx';
import Axios from 'axios';

const CreateUserPage = () => {

/*     const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') */
    
    const [details, setDetails] = useState({
		uname: "",
		email: "",
		password: "",
	});

    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setDetails({ ...details, [input.name]: input.value });
	};

    const handleSubmit = async (e) => { //Denna metod retunerar vårt objekt
		e.preventDefault();

        if (!details.uname) {   //Denna validerar data i state
            alert ('please add username')
            return
        } else if (!details.email) {
            alert ('please add email')
            return
        } else if (!details.password) {
            alert ('please add password')
            return
        } 

		try {
			const url = "http://localhost:3001/";
			const { details: res } = await Axios.post(url, details);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
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
                                    onChange={handleChange}
                                    value={details.uname}
                                />
                         </label>
                         <label htmlFor="email" className="form-input">
                            <p>E-mail:</p>
                            <input
                                type="email"
                                placeholder="Type in prefered@email.com"
                                name="email"
                                onChange={handleChange}
                                value={details.email}
                            />
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Password:</p>
                            <input
                                type="password"
                                placeholder="Type in a Password"
                                name="password"
                                onChange={handleChange}
                                value={details.password}
                            />
                        </label>
                        <br/><br/>
						{error && <div>{error}</div>}
						<button type="submit">Sing Up</button>
					</form>
                </div>
            </section>
        </div>
    );
};

export default CreateUserPage;