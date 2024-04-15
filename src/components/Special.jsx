import React from "react";

function Special(props) {
    const { dish, description, image } = props;
    return (
        <>
            <img src={image} alt={dish} />
            <h4>{dish}</h4>
            <p>{description}</p>
            <>
                <p>Order a delivery</p>
                <img src={image} alt="" />
            </>
        </>
    )
}

export default Special;