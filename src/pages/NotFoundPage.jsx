import React from 'react';
import NavBar from '../components/navbar.jsx';

const NotFoundPage = () => {
    return (
        <div className='container'>
            <header className="App-header">
                <NavBar/>
            </header>
            <main className='container'>
                <p>
                404 - Page Not Found
                </p>
            </main>
        </div>
    )
};
export default NotFoundPage;