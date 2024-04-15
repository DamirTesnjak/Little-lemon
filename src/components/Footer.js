import React from "react";

import Nav from "./Nav";

function Footer() {
    return (
        <footer>
            <img src="" alt="Little lemon logo" />
            <div id="navLinks">
                <h3>Doormat navigation</h3>
                <Nav />
            </div>
            <div id="contact">
                <h3>Contact</h3>
                <p>Address: 12th Maldove Stret, Chicago, Ilinois, US</p>
                <p>Tel: 00854 548 521 5214</p>
                <p>Email: little.lemon@aol.us</p>
            </div>
            <div id="socialPlatfromsLinks">
                <h3>Social platforms</h3>
                <p>Facebook</p>
                <p>Linkedin</p>
            </div>
        </footer>
    )
}

export default Footer;