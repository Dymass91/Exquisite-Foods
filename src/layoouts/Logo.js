import React from 'react';
import "../styles/Logo.css";
import ImgLogo from '../images/Logo.jpg';


const Logo = () => {
    return (
        <>
            <div className="Logo"><img className="exouisideLogo" src={ImgLogo} alt="Logo" /></div>

        </>

    );
}


export default Logo;