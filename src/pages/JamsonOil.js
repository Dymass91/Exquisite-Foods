import React from 'react';
import "../styles/Eco&Ext_Oil.css";
import marmeleda from '../Jamon Files/Imagen Crema Dulce  Mermelada 100 gr.jpg';
import Jamson99 from '../Jamon Files/Imagen botella 99 ml.jpg';
import Jamson250 from '../Jamon Files/Botella 250 ml. condimento oiljamon.jpg';
import extravirginoil from '../images/Extravirginoil.jpg';
import JamonLogo from '../Jamon Files/LOGO OIL JAMON - TRANS.png';



const ExtOlivePage = () => {
    return (
        <>

            <div className="oil_products-list">



                <div className="OilIntroduce_text">
                    <img className="oil_Jamon-Logo"
                        style={{
                            height: "400px",
                            shapeOutside: "1rem",
                            padding: "2rem",
                            position: 'relative',
                            float: "left",
                        }}
                        src={JamonLogo} alt="" />
                    <strong>Oil&Jamón</strong>  is a new brand, created in January 2017 in Sevilla, Spain. After months of trial, we succeeded to blend, through a traditional process, Iberian ham and extra virgin olive oil, to produce a unique condiment that brings flavor and aroma to our home-made dishes.

                    Our company, <strong>Alimentación</strong> e  <strong>Innovación Jama S.L.</strong> , was born out of our love for traditional cuisine and prime quality raw materials, the basis of our corporate philosophy.

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
                        <img className="oil-image" src={marmeleda} alt="" />
                    </div>
                    <div className="content">
                        <h2>IBERIAN HAM MERMELADE 220 gr. </h2>

                        <h4>
                            Price:
                            <br></br>
                            1x £ 5.50
                            <br></br>
                            15 £ 73.50 ( £ 4.90 e/o)
                        </h4>

                    </div>

                </div>


                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={Jamson99} alt="" />
                    </div>
                    <div className="content">
                        <h2>IBERIAN HAM EXTRA VIRGIN OLIVE  OIL 100 ml. </h2>

                        <h4>
                            Price:
                            <br></br>
                            1 x £ 3.60
                            <br></br>
                            12 x £ 36  ( £ 3 e/o )
                        </h4>

                    </div>
                </div>
                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={Jamson250} alt="" />
                    </div>
                    <div className="content">
                        <h2>IBERIAN HAM GOURMET BOTTLE EXTRA VIRGIN OLIVE OIL 250 gr.  </h2>

                        <h4>
                            Price:
                            <br></br>
                            1 x £ 7
                            <br></br>
                            12 x £ 78 ( 6.50 e/o )
                            <br></br>

                        </h4>

                    </div>
                </div>
                <h3> *ALL PRICES ARE INCLUSIVE OF VAT</h3>
            </div>

        </>
    );
}

export default ExtOlivePage;