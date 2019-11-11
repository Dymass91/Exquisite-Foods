import React from 'react';
import "../styles/Logo.css";
import img1 from '../images/Logo.jpg';

const Logo = () => {
    return (
        <>
            <div className="Logo"><img className="exouisideLogo" src={img1} alt="Logo" /></div>
        </>
    );
}


export default Logo;