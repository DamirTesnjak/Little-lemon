import React from "react";
import Testimonial from "./Testimonial";

function Testimonials() {
    const specials = [
        { name: 'Master chief', comment: "Best restaurant ever. Stuff are very nice", rating: 5, image: "" },
        { name: 'Supergirl', comment: "I am not complaining about dishes. Service is kinda slow for my taste", rating: 4, image: "" },
        { name: 'Batman', comment: "Food, ambient is extra top. No complaints. Must visit!", rating: 5,  image: "" },
    ]
    return (
        <> 
            <h3>Testimonials</h3>
            {specials.map((profile) => {
                return (
                <Testimonial
                    name={profile.name}
                    comment={profile.comment}
                    rating={profile.rating}
                    image={profile.image}
                />)
            })}
        </>
    )
}

export default Testimonials;