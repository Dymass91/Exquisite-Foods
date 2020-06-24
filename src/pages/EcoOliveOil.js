import React from 'react';
import "../styles/Eco&Ext_Oil.css";
import olej5l from '../images/olej5l.jpg';
import Organic250ml from '../images/Extravirginoil 250ml.jpg';
import Organic500ml from '../images/Extravirginoilsmall.jpg';
import Organic750ml from '../images/Organic500ml.jpeg';


const EcoOlivePage = () => {
    return (
        <>

            <div className="oil_products-list">
                <h1 className="oil_product_list-h1"> Organic olive oil</h1>
                <div className='OilIntroduce_text'>

                    Organic Extra virgin olive oil is fairly nutritious.
            <br></br>
It contains modest amounts of vitamins E and K and plenty of beneficial fatty acids.
<br></br>
One tablespoon (13.5 grams) of olive oil contains the following:
<br></br><br></br>
                    <strong>Saturated fat:</strong> 14%
<br></br>
                    <strong>Monounsaturated fat:</strong> 73% (mostly oleic acid)
<br></br>
                    <strong>Vitamin E:</strong> 13% of the Daily Value (DV)
<br></br>
                    <strong>Vitamin K:</strong> 7% of the DV
<br></br>
                    <br></br>
Notably, extra virgin olive oil shines in its antioxidant content.
<br></br><br></br>
Antioxidants are biologically active, and some of them can help fight serious diseases.
<br></br>
The oil’s main antioxidants include the anti-inflammatory oleocanthal, as well as oleuropein, a substance that protects LDL (bad) cholesterol from oxidation.
<br></br><br></br>
Also, Chronic inflammation is believed to be among the leading drivers of many diseases, including heart disease, cancer, metabolic syndrome, diabetes, and arthritis.
<br></br>
Some speculate that olive oil’s ability to fight inflammation is behind its many health benefits.
<br></br><br></br>
Oleic acid, the most prominent fatty acid in olive oil, has been found to reduce inflammatory markers like C-reactive protein.<br></br>
                    <br></br>
However, the oil’s main anti-inflammatory effects seem to be due to its antioxidants, primarily oleocanthal, which has been shown to work like ibuprofen, a popular anti-inflammatory drug.
<br></br>
Researchers estimate that the amount of oleocanthal in 50 ml (about 3.4 tablespoons) of extra virgin olive oil exerts effects similar to those of 10% of the adult ibuprofen dosage for pain relief.<br></br>
                    <br></br>
Also, one study showed that substances in olive oil can reduce the expression of genes and proteins that mediate inflammation.
<br></br><br></br>
Keep in mind that chronic, low-level inflammation is usually fairly mild, and it takes years or decades for it to do damage.
<br></br>
Using extra virgin olive oil may help prevent this from happening, leading to a reduced risk of various inflammatory diseases, especially heart disease.
            </div>

                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={Organic250ml} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 250 ml.</h2>

                        <h4>
                            Price:
                            <br></br>
                            1 + x £ 4.00
                        <br></br>
15+ x £ 3.70
<br></br>
100+ x £ 3.50
<br></br>
200+ x £ 3.00
<br></br>
500+ x £ 2.50
                        </h4>
                    </div>

                </div>


                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={Organic500ml} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 500 ml.</h2>

                        <h4>
                            Price:
                            <br></br>
                            1+ x £ 6.00
                        <br></br>
15+ x £ 5.50
<br></br>
100+ x £ 5.00
<br></br>
200+ x £ 4.50
<br></br>
350+ x £ 4.00
<br></br>
500+ x £ 3.50
                        </h4>

                    </div>

                </div>

                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={Organic750ml} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 750 ml.</h2>

                        <h4>
                            Price:
                            <br></br>
                            1+ x £ 7.00
                        <br></br>
15+ x £ 6.50
<br></br>
100+ x £ 6.00
<br></br>
200+ x £ 5.50
<br></br>
350+ x £ 5.00
<br></br>
500+ x £ 4.50
                        </h4>

                    </div>

                </div>

                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={olej5l} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 5 litres.
</h2>

                        <h4>
                            Price:
                            <br></br>
                            1+ x £ 35
                            <br></br>
                            4+ x £ 33
                            <br></br>
                            10+ x £ 30
                            <br></br>
                            20+ x £ 27
                            <br></br>
                            50+ x £ 25
                            <br></br>
                            100+ x £ 23
                        </h4>

                    </div>

                </div>
                <h3> *ALL PRICES ARE INCLUSIVE OF VAT</h3>
            </div>
        </>
    );
}

export default EcoOlivePage;