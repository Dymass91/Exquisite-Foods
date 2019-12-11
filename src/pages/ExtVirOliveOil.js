import React from 'react';
import "../styles/ExtOliveOil.css";
import olejcan from '../images/olejcan.jpg';
import extravirginoil from '../images/Extravirginoil.jpg';
import extravirginoilsmall from '../images/Extravirginoilsmall.jpg';


const ExtOlivePage = () => {
    return (
        <>
            <div className="container">
                <h1>Extra virgin olive oil</h1>
                <div className="box">
                    <div className="imgbox">
                        <img src={olejcan} alt="" />
                    </div>
                    <div className="content">
                        <h2>Extra virgin oil - 5 litres can</h2>
                        <p>Can of 5 liters of oil with denomination of origin "Sierra de Cádiz". This modern format stands out for its convenience and ease of use and storage, and for the denomination of origin "Sierra de Cádiz".</p>
                        <h4>Format: Box of 6 cans</h4>
                        <h4>Price: Ask about</h4>
                    </div>

                </div>


                <div className="box">
                    <div className="imgbox">
                        <img src={extravirginoil} alt="" />
                    </div>
                    <div className="content">
                        <h2>Extra virgin oil - 5 litres</h2>
                        <p>5 liter bottle of extra virgin olive oil. Probably, this is the format preferred by housewives, because it is the cheapest and also because it has more quantity.</p>
                        <h4>Format: Box of 4 bottles</h4>
                        <h4>Price: Ask about</h4>
                    </div>

                </div>

                <div className="box">
                    <div className="imgbox">
                        <img src={extravirginoilsmall} alt="" />
                    </div>
                    <div className="content">
                        <h2>Extra virgin oil - 3/4 litres</h2>
                        <p>Our flagship product, packaged in the best package of all time, the glass, to keep all its fragrance and flavor. Specially manufactured, packaged raw (unfiltered) to satisfy the most demanding palates.</p>
                        <h4>Format: Box of 15 bottles.</h4>
                        <h4>Price: Ask about</h4>
                    </div>

                </div>
            </div>

        </>
    );
}

export default ExtOlivePage;