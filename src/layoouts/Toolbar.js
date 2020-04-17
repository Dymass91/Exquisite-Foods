import React from 'react';
import DrawerToggleButton from '../layoouts/NavBar/components/SideDrawer/DrawerToggleButton';

import '../styles/Toolbar.css';
import ImgLogo from '../images/Logo.jpg';

const toolbar = props => (

    <div className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <img className="toolbarLogo" src={ImgLogo} alt="Logo" />
            <div className="toolbar__logo"> </div>
            <div className="spacer" />

        </nav >
    </div >

);

export default toolbar;