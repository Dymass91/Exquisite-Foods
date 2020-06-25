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

                        src={JamonLogo} alt="" />
                    <strong>Oil&Jamón</strong> is a newly created brand, January 2017, in Seville, Andalusia (Spain)

                    <br></br><br></br>
After months of testing, and with a natural process ,we merge Iberian Ham and Extra Virgin Olive Oil, originating a unique seasoning that brings flavour and aroma to the dishes made in our kitchen.
<br></br><br></br>
The Entity: Food and Innovation Jama S.L. (Oil & Ham)
<br></br><br></br>
Our company is born from the love we feel for traditional food, and for the quality of the raw matrials, the main focus of our business philosophy.

<br></br><br></br>
The values of Mediterranean cuisine , and Iberian ham as the main attraction, leads us to feature this in all our products.

<br></br><br></br>
We want to promote this delicacy ,and reach out to all parts of the world, incorporating it in a varied and creative range of products "Oil & Ham"


<br></br><br></br>
                    <strong>THE CREATION OF OIL & JAMÓN</strong>
                    <br></br><br></br>
The manufacturing process is absolutely traditional, complying with all the quality regulations in its production, using as raw material, Iberian ham from the Sierra de Aracena (Huelva, Andalusia, Spain) and extra virgin olive oil from Andalusia Working for more than 25 days , we managed to unite ,in a natural way , the flavours of these two exceptional products of Iberian gastronomy.
We can say that without doubt, the Oil & Ham products, embrace the two concepts that define our brand : Innovation and Tradition.

<br></br><br></br>

                    <strong>OIL & JAMON. THE PRODUCT.</strong>
                    <br></br><br></br>
Our Extra Virgin Olive Oil confit, with Iberian Ham , we call it a CONDIMENT, because it is so versatile , it can pair with all kinds of product: Poultry, Pork, Beef, Tortillas and scrambled eggs .(add it to the beaten egg mixture ) . Grilled or sautéed vegetables, mushrooms and pasta, lentils to all types of legumes. (adding just a teaspoon to each dish ) Cod or Tuna, all types of seafood. Canned vegetables can be a suprise, as it enriches the flavor. To sum up, everything we eat is enriched by adding OIL & JAMÓN.
<br></br><br></br>
With a 250 ml bottle of Oil & Ham. we can flavour up to 112 dishes, just by adding one teaspoon per plate, with a cost per portion of 0.10 € cents.

<br></br><br></br>
Remember, Oil & Ham is not created for cooking. It is used to flavour previously cooked dishes ,to give a unique flavour.
<br></br><br></br>
Thank you for betting on a healthy and innovative product


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
                            15x £ 73.50 ( £ 4.90 e/o)
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