import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";
import StickyBox from "react-sticky-box";

const list = [
    { name: "Home page", path: "/", exact: true },
    { name: "Organic olive oil", path: "/EcoOlive" },
    { name: "Extra virgin olive oil", path: "/ExtOlive" },
    { name: "Oil & Jamón", path: "/JamsonOil" },
    { name: "Health benefits", path: "/HealtBenefits" },
    { name: "Contact", path: "/contact" },

]

const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <StickyBox offsetTop={0} offsetBottom={20}>
            <nav className="main">
                <ul>
                    {menu}

                </ul>
            </nav>
        </StickyBox>
    );
}

export default Navigation;


