import React from "react";

function Nav(props) {
    const {
        isInFooter
    } = props
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Menu', link: '/' },
        { name: 'Reservations', link: '/' },
        { name: 'Order Online', link: '/' },
        { name: 'Login', link: '/' },
    ]
    return (
        <nav className="nav">
            <ul className={isInFooter ? "link-list-footer" : "link-list"}>
                {navLinks.map((nav, index) => {
                    return (
                        <li className={isInFooter ? "list-footer" : "list"} key={index}>
                            <a href={nav.link}>{nav.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;