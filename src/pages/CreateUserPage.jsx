import React, {useState} from 'react';
import NavBar from '../components/navbar.jsx';

const CreateUserPage = () => {

    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] = useState('')

    const createUser = (newUser) => {   //Denna metod retunerar vårt objekt
        setId(Math.floor(Math.random() * 1000) +1)
        const addUser = {id, ...newUser} //Denna fastnar inte i vår onSubmit
        console.log(newUser);
        setUname([...uname, addUser])
    }

    const onSubmit = (e) => {   //Denna hanterar vår onSubmit och validerar samt kallar på vår createUser
        e.preventDefault()
        if (!uname) {
            alert ('please add username')
            return
        } else if (!email) {
            alert ('please add email')
            return
        } else if (!password) {
            alert ('please add password')
            return
        } 
        createUser ({ uname, email, password})
        //Efter "create user"-metoden, setState / reset av form
        setUname('')
        setEmail('')
        setPassword('')
    }
    
    return (
        <div> 
            <header className="App-header">
                <NavBar/>
            </header>
            <section className="createUser">
                <div className="container">
                    <h2 className={"createuser"}>Create New User</h2>
                </div>
                <div className="form-box">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="username" className="uname">
                            <p>User Name:</p>
                            <input id="uname" value={uname} onChange={(e) => setUname(e.target.value)} type="text" placeholder="Type in your username" className={"input"}/>
                        </label>
                        <label htmlFor="email" className="form-input">
                            <p>E-mail:</p>
                            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Type in prefered email" className={"input"}/>
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Password:</p>
                            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Type in a password" className={"input"}/>
                        </label>
                        <label htmlFor="password" className="form-input">
                            <p>Repeat password:</p>
                            <input id="password" type="password" placeholder="Repeat your password" className={"input"}/>
                        </label>
                        <div>
                            <button type="submit">Create User</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CreateUserPage;