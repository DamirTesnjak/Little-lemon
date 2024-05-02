import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return(
        <div className="confirmed-booking">
            <h1>Booking has been confirmed!</h1>
            <Link to="/"><button>Go to main page</button></Link>
        </div>
    )
}

export default ConfirmedBooking;