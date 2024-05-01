import React from "react";
import Testimonial from "./Testimonial";

function Testimonials() {
    const specials = [
        { name: 'Master chief', comment: "Best restaurant ever. Stuff are very nice", rating: 5, image: "assets/MasterChief.jpg" },
        { name: 'Supergirl', comment: "I am not complaining about dishes. Service is kinda slow for my taste", rating: 4, image: "assets/SuperGirl.jpg" },
        { name: 'Batman', comment: "Food, ambient is extra top. No complaints. Must visit!", rating: 5,  image: "assets/BatmanLogo.jpg" },
        { name: 'Donald Trump', comment: "Best food in America, The best, the best. This is proper american place for eat! Chicago is great, the best, but New York is better!", rating: 5,  image: "assets/DonaldTrump.jpg" },
    ]
    return (
        <div className="testimonials"> 
            <h3 className="testimonials-title">Testimonials</h3>
            {specials.map((profile) => {
                return (
                <Testimonial
                    name={profile.name}
                    comment={profile.comment}
                    rating={profile.rating}
                    image={profile.image}
                />)
            })}
        </div>
    )
}

export default Testimonials;