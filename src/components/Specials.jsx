import React from "react";
import Special from "./Special";

function Specials() {
    const specials = [
        {
            dish: 'Greek Salad',
            price: '8.20',
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            image: 'assets/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg',
        },
        {
            dish: 'Bruschetta',
            price: '5.50',
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations.",
            image: 'assets/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg',
        },
        {
            dish:
            'Lemonade dessert',
            price: '1.50',
            description: "Lemon Custard Cake is a quick and easy dessert recipe, perfect for summer. This cake is soft and creamy, with refreshing lemon flavor. It’s melt-in-your-mouth good! If you like light and creamy desserts, try Vanilla Magic Custard Cake or Easy Banana Magic Cake, too.",
            image: 'assets/Lemon-Custard-Cake-2.jpg',
        },
    ]
    return (
        <div className="specials" id="menu">
            <div className="specials-title">
                <h2 className="specials-title-text">This week specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="specials-list">
                {specials.map((dish) => {
                    return (<Special
                        dish={dish.dish}
                        description={dish.description}
                        image={dish.image}
                        price={dish.price}
                    />)
                })}
            </div>
        </div>
    )
}

export default Specials;