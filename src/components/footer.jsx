import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Footer = () => { //Min Placeholder för framtida kontrollyta för applikationen. Här skall trumkit etc kunna styras ifrån
    console.log("Footer - rendered");
    const [showEdit, setShowEdit] = useState (false)
    
    return (
        <div className="footer">
            <button  onClick={() => setShowEdit(!showEdit)}>{showEdit? 'SAVE' : 'EDIT'} SOUND</button>
            {(() => {
                if (showEdit) {
                    return (
                        <div className={"container"}>
                            <nav>
                                <ul className="primary-nav">
                                    <li><Link to="#">MOOD</Link></li>
                                    <li><Link to="#">GENRE</Link></li>
                                    <li><Link to="#">COMPLEXITY</Link></li>
                                    <li><Link to="#">AMBIENCE</Link></li>
                                </ul>
                            </nav>
                        </div>
                    )
                }
            })()}
            <p>copyright &copy; 2022</p>
            <Link to="/about">ABOUT</Link><em> | </em><Link to="https://www.ha-an.se">HA-AN PRODUCTION</Link>
        </div>
    )
}
export default Footer;