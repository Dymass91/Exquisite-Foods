import React from 'react';
import "../styles/EcoOliveOil.css";
import olej5l from '../images/olej5l.jpg';
import olej4l from '../images/olej4_5.jpg';


const EcoOlivePage = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="imgbox">
                        <img src={olej5l} alt="" />
                    </div>
                    <div className="content">
                        <h2>Ecological olive oil - 5 litres</h2>
                        <p>This oil has been extracted from olives grown in olive trees cultivated whith  natural fertilizers, without using any chemical herbicides.</p>
                        <h4>Format: Box of 4 bottles</h4>
                        <h4>Price: Ask about</h4>
                    </div>

                </div>


                <div className="box">
                    <div className="imgbox">
                        <img src={olej4l} alt="" />
                    </div>
                    <div className="content">
                        <h2>Ecological olive oil - 4 litres</h2>
                        <p>This oil has been extracted from olives grown in olive trees cultivated whith  natural fertilizers, without using any chemical herbicides.</p>
                        <h4>Format: Box of 4 bottles</h4>
                        <h4>Price: Ask about</h4>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EcoOlivePage;