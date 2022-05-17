import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

//Är vår component ej i behov av states så använder vi function med return(); istället för ett definiera en klass
//I function-komponenter så måste vi mappa in props som ett värde för att kunna använda dessa i komponenten. Skippa även att ha .this i denna typ av component.

function NavBar(props) {
    console.log("NavBar - rendered");
    const location = useLocation();

    return (
        <main>
            <div className='navbar'>
                <div className='container'>
                    <div className={"logo"}>
                            <Link to="/" cursor="pointer">
                                <img src={"./images/logo.png"} alt="beatstep" width="100%" height="100%"/>
                            </Link>
                            <img src='./logo512.png' className="App-logo" alt="logo" />
                    </div>
                </div>
                <nav>
                    <ul className="primary-nav">
                        <li><Link to="/CreateUser" className="laptop-as mobile-as">CREATE ACCOUNT</Link></li>
                        <li><Link to="/LogIn" className={"laptop-as mobile-as"}>LOG IN</Link></li>
                        <li className={"laptop-links mobile-links"}><Link to="/About">ABOUT US</Link></li>
                    </ul>
                    {location.pathname==='/' && //Detta gör att vi enbart visar aktiva bpm under Main-endpointen
                        <span>Active: {props.activeBPM}</span>
                    }
                </nav>
            </div>  
        </main>
    );
}
 
export default NavBar;