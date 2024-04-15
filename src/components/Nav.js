import React from "react";

function Nav() {
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Menu', link: '/' },
        { name: 'Reservations', link: '/' },
        { name: 'Order Online', link: '/' },
        { name: 'Login', link: '/' },
    ]
    return (
        <nav>
            <ul>
                {navLinks.forEach((nav, index) => {
                    return (
                        <li key={index}>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;