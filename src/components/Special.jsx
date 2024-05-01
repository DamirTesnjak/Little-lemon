import React from "react";

function Special(props) {
    const { dish, price, description, image } = props;
    return (
        <div className="special">
            <img
                className="special-image"
                src={image}
                alt={dish}
            />
            <h4 className="special-dish-title">{dish}</h4>
            <h4 className="special-dish-title">${price}</h4>
            <p className="special-dish-description">{description}</p>
            <div className="special-order-delivery">
                <p className="special-order-text">Order a delivery</p>
                <img className="delivery-logo" src="assets/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="" />
            </div>
        </div>
    )
}

export default Special;