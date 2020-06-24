import React from 'react';
import "../styles/Eco&Ext_Oil.css";
import extravirgin500ml from '../images/Extravirginoilsmall.jpg';
import extravirgin750ml from '../images/Organic500ml.jpeg';
import olej5l from '../images/olej5l.jpg';


const ExtOlivePage = () => {
    return (
        <>
            <div className="oil_products-list">
                <h1 className="oil_product_list-h1">Extra virgin olive oil</h1>
                <div className='OilIntroduce_text'>
                    Dietary fats are highly controversial, with debates about animal fats, seed oils, and everything in between in full force.
                <br></br><br></br>
                That said, most people agree that extra virgin olive oil is incredibly healthy.
                <br></br><br></br>
                Part of the Mediterranean diet, this traditional oil has been a dietary staple for some of the world's healthiest populations.
                <br></br><br></br>
                Studies show that the fatty acids and antioxidants in olive oil can offer some powerful health benefits, including a reduced risk of heart disease.
                <br></br><br></br>
                This article reviews why extra virgin olive oil is one of the healthiest fats.
                <br></br><br></br>
                Olive oil is oil that has been extracted from olives, the fruits of the olive tree.
                <br></br><br></br>
                The production process is incredibly simple. Olives can be pressed to extract their oil, but modern methods involve crushing the olives, mixing them together, and then separating the oil from the pulp in a centrifuge.
                <br></br><br></br>
                After centrifugation, small amounts of oil remain in the pomace. The leftover oil can be extracted using chemical solvents and is known as olive pomace oil.
                <br></br><br></br>
                Olive pomace oil is generally cheaper than regular olive oil and has a bad reputation.
                <br></br><br></br>
                Buying the right typeof olive oil is crucial. There are three main grades of olive oil — refined, virgin, and extra virgin. Extra virgin olive oil is the least processed or refined type.
                <br></br><br></br>
                Extra virgin olive oil is considered to be the healthiest type of olive oil. It’s extracted using natural methods and standardized for purity and certain sensory qualities like taste and smell.
                <br></br><br></br>
                Olive oil that is truly extra virgin has a distinct taste and is high in phenolic antioxidants, which is the main reason why it’s so beneficial.
        </div>


                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={extravirgin500ml} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 500 ml </h2>

                        <h4>
                            Price:
                            <br></br>
                            1+ x £ 5.00
                        <br></br>
15+ x £ 4.50
<br></br>
100+ x £ 4.00
<br></br>
200+ x £ 3.50
<br></br>
350+ x £ 3.00
<br></br>
500+ x £ 2.70
                        </h4>
                    </div>

                </div>


                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={extravirgin750ml} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 750 ml. </h2>

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
500+ x £ 3.70
</h4>
                    </div>

                </div>

                <div className="box">
                    <div className="imgbox">
                        <img className="oil-image" src={olej5l} alt="" />
                    </div>
                    <div className="content">
                        <h2>FORMAT 5 litres. </h2>

                        <h4>
                            Price:
                            <br></br>
                            1+ x £ 30.00
                            <br></br>
                            4+ x £ 28.00
                            <br></br>
                            10+ x £ 25.00
                            <br></br>
                            20+ x £ 23.00
                            <br></br>
                            50+ x £ 21.00
                            <br></br>
                            100+ x £ 19.00
                        </h4>

                    </div>

                </div>
                <h3> *ALL PRICES ARE INCLUSIVE OF VAT</h3>
            </div>

        </>
    );
}

export default ExtOlivePage;