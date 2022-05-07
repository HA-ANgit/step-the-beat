import React from "react";


const Footer = () => { //Min Placeholder för framtida kontrollyta för applikationen. Här skall trumkit etc kunna styras ifrån
    return (
        <div className="footer">
            <div className={"container"}>
                <nav>
                    <ul className="primary-nav">
                        <h2>EDIT SOUND</h2>
                        <li><a href="#">MOOD</a></li>
                        <li><a href="#">GENRE</a></li>
                        <li><a href="#">COMPLEXITY</a></li>
                        <li><a href="#">AMBIENCE</a></li>
                        <button>SAVE</button>
                    </ul>

                </nav>
            </div>
        </div>
    )
}
export default Footer;