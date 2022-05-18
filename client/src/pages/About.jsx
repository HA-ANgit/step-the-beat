import React from 'react';
import NavBar from '../components/navbar.jsx';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <header className="App-header">
                <NavBar/>
            </header>
            <main className='container'>
                <div className='container'>
                    <h4>Version 1.0.0</h4>
                    <Link to='/'>Go Back</Link>
                </div>
            </main>
        </div>
    )
};
export default About;