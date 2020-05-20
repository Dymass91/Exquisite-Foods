import React from 'react';
import '../styles/Toolbar.css';
import ImgLogo from '../images/Logo.jpg';

const toolbar = props => (

    <div className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">

            </div>
            <img className="toolbarLogo" src={ImgLogo} alt="Logo" />
            <div className="toolbar__logo"> </div>
            <div className="spacer" />

        </nav >
    </div >

);

export default toolbar;