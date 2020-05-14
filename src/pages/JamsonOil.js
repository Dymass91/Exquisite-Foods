import React from 'react';
import "../styles/Eco&Ext_Oil.css";
import olejcan from '../images/olejcan.jpg';
import extravirginoil from '../images/Extravirginoil.jpg';
import JamonLogo from '../Jamon Files/LOGO OIL JAMON - TRANS.png';



const ExtOlivePage = () => {
    return (
        <>
            <div className="oil_products-list">

                <h1 className="oil_product_list-h1">Oil and Jamón</h1>

                <div className="OilIntroduce_text">
                    {/* <img className="oil-Jamon" src={JamonLogo} alt="" /> */}
                    <strong>Oil&Jamón</strong>  is a new brand, created in January 2017 in Sevilla, Spain. After months of trial, we succeeded to blend, through a traditional process, Iberian ham and extra virgin olive oil, to produce a unique condiment that brings flavor and aroma to our home-made dishes.
<br></br><br></br>
                    Our company, <strong>Alimentación</strong> e  <strong>Innovación Jama S.L.</strong> , was born out of our love for traditional cuisine and prime quality raw materials, the basis of our corporate philosophy.
                    <br></br><br></br>
                    Our manufacturing process is entirely traditional and respectful of all quality standards applicable. We use exclusively Andalusian goods: Iberian ham from the Sierra de Aracena, in the province of Huelva, and extra virgin olive oil. A month of maceration allows the perfect blend of flavors from these two distinctive products of the Spanish gastronomy.
                    With our products <strong>Oil&Jamón</strong> come to fruition the two defining concepts of our brand: <strong>Innovation</strong> and <strong>tradition</strong>.
                    <br></br><br></br>
                    Our oil <strong>Oil&Jamón</strong> amply deserves its name of condiment, as it blends harmoniously with all sorts of dishes: white and red meats, salted cod and tuna, omelets, vegetables, mushrooms, pasta, lentils, mashed potatoes, etc. Nothing like it to bring out the flavors of canned food or any other dish of our choice.
                    <br></br><br></br>
                    With a bottle of 25 cl, we can season more than 100 dishes. Remember that Oil&Jamón isn’t made for cooking, it is added to our dishes to give them a unique flavor.
                    <br></br><br></br>
                    Thank you for betting on a healthy and innovative product.


                </div>

                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={extravirginoil} alt="" />
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
                        <img className="oil-image" src={extravirginoil} alt="" />
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
                        <img className="oil-image" src={extravirginoil} alt="" />
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