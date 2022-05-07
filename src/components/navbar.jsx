import React, { Component } from 'react';

//Är vår component ej i behov av states så använder vi function med return(); istället för ett definiera en klass
//I function-komponenter så måste vi mappa in props som ett värde för att kunna använda dessa i komponenten. Skippa även att ha .this i denna typ av component.

function NavBar(props) {
    return (
        <main>
            <div className='navbar'>
                <div className='container'>
                    <div className={"logo"}>
                            <a to="/">
                                <img src={"./images/logo.png"} alt="beatstep" width="100%" height="100%"/>
                            </a>
                    </div>
                </div>
                <nav>
                    <ul className="primary-nav">
                        <li><a to="/CreateUserPage" className="laptop-as mobile-as">CREATE ACCOUNT</a></li>
                        <li><a to="#" className={"laptop-as mobile-as"}>LOG IN</a></li>
                        <li className={"laptop-links mobile-links"}><a href="#">ABOUT US</a></li>
                    </ul>
                    <span>Active: {props.activeBPM}</span>
                </nav>
            </div>
        </main>
    );
}
 
export default NavBar;