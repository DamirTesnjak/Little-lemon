import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero"> 
            <div className="hero-content">
                <h1 className="hero-left-title">Little Lemon</h1>
                <h2 className="hero-left-subtitle">Chicago</h2>
                <p className="hero-left-text">We are family owned Meditteranian restaurant, located on Maldove Street in Chicago, Illinois. We focus on traditional recipes served with modern twist.</p>
                <Link to="/Booking"><button>Reserve a table</button></Link>
            </div>
            <div className="hero-logo">
                <img className="hero-right-image" src="assets/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg" />
            </div>
        </div>
    )
}

export default Hero;