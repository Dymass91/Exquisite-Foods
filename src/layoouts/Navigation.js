import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
    { name: "Home Page", path: "/", exact: true },
    { name: "Ecological olive oil", path: "/EcoOlive" },
    { name: "Extra virgin olive oil", path: "/ExtOlive" },
    { name: "Health Benefits", path: "/admin" },
    { name: "Contact", path: "/contact" },

]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Navigation;