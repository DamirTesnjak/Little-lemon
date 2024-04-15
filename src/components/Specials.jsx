import React from "react";
import Special from "./Special";

function Specials() {
    const specials = [
        { dish: 'Greek Salad', description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ", image: '' },
        { dish: 'Bruschetta', description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.", image: '' },
        { dish: 'Lemonade dessert', description: "Made with vanilla ice cream and homemade lemonade, this recipe is the  perfect combination of a refreshing beverage and a dessert. It's great  for those warm, sunny days.", image: '' },
    ]
    return (
        <> 
            <h2>This week specials!</h2>
            {specials.map((dish) => {
                return (<Special
                    dish={dish.dish}
                    description={dish.description}
                    image={dish.image}
                />)
            })}
        </>
    )
}

export default Specials;