import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer.css'

const list = [
    { name: "Home Page", path: "/", exact: true },
    { name: "Ecological olive oil", path: "/EcoOlive" },
    { name: "Extra virgin olive oil", path: "/ExtOlive" },
    { name: "Health Benefits", path: "/HealtBenefits" },
    { name: "Contact", path: "/contact" },

]

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className={drawerClasses}>
            <ul>
                {menu}

            </ul>
        </nav>
    )
}

export default sideDrawer;