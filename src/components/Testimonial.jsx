import React from "react";

function Testimonial(props) {
    const { name, comment, rating, image } = props;

    const displayRating = () => {
        let i = 0;
        const ratingList = []
        for (i; i < rating; i += 1) {
            ratingList.push(true)
        }
        let j = 0;
        for (j; j < 5 - rating; j += 1) {
            ratingList.push(false)
        }

        return ratingList.map((rate) => {
            if (rate) {
                return <span class="fa fa-star checked"></span>
            }
            return <span class="fa fa-star"></span>
        })
    }

    return (
        <div className="testimonial">
            <p className="testimonial-name">{name}</p> 
            <div className="image-rating-testimonial">
                <img className="testimonial-image" src={image} alt='profile' width='100px' height='100px'/>
                <div className="rating">
                    {displayRating()}
                </div>
            </div>
            <p className="testimonial-comment">{comment}</p>
        </div>
    )
}

export default Testimonial;