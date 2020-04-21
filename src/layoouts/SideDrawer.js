import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar/components/SideDrawer/SideDrawer.css';
import SocialFollow from './SocialFollow';


const list = [
    { name: "Home Page", path: "/", exact: true },
    { name: "Ecological olive oil", path: "/EcoOlive" },
    { name: "Extra virgin olive oil", path: "/ExtOlive" },
    { name: "Oil & Jamón", path: "/JamsonOil" },
    { name: "Health Benefits", path: "/HealtBenefits" },
    { name: "Contact", path: "/contact" },

]

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    else if (!props.show) {
        drawerClasses = 'side-drawer';
    }
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink onClick={!props.show} to={item.path} exact={item.exact ? item.exact : false}  >{item.name}</NavLink>

        </li>
    ))
    return (
        <nav className={drawerClasses}>
            <ul>
                {menu}
                <SocialFollow />
            </ul>
        </nav>
    )
}

export default sideDrawer;