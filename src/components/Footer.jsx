import React from "react";

import Nav from "./Nav";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-item">
                <img src="LittleLemon.jpg" alt="Little lemon logo" width='200px'/>
            </div>
            <div className="footer-item">
                <h3>Doormat navigation</h3>
                <Nav isInFooter/>
            </div>
            <div className="footer-item">
                <h3>Contact</h3>
                <p>Address: 12th Maldove Stret, Chicago, Ilinois, US</p>
                <p>Tel: 00854 548 521 5214</p>
                <p>Email: little.lemon@aol.us</p>
            </div>
            <div className="footer-item">
                <h3>Social platforms</h3>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
        </footer>
    )
}

export default Footer;