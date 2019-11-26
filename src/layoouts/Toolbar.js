import React from 'react';
import DrawerToggleButton from '../layoouts/NavBar/components/SideDrawer/DrawerToggleButton';

import '../styles/Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <img alt="exousitefoods" />
            <div className="toolbar__logo"> </div>
            <div className="spacer" />

        </nav >
    </header >

);

export default toolbar;