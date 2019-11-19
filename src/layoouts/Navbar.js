import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

const list = [
    { name: "Home Page", path: "/", exact: true },
    { name: "Ecological olive oil", path: "/EcoOlive" },
    { name: "Extra virgin olive oil", path: "/ExtOlive" },
    { name: "Health Benefits", path: "/HealtBenefits" },
    { name: "Contact", path: "/contact" },

]

const Navbar = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="Navbar__menu">
            <ul className="Navbar__menu__ul">
                {menu}
            </ul>
        </nav>
    );
}

export default Navbar;