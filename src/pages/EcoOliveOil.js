import React from 'react';
import "../styles/EcoOliveOil.css";
import olej5l from '../images/olej5l.jpg';
import olej4l from '../images/olej4_5.jpg';


const BenefitsPage = () => {
    return (
        <>
        <div className="Oil__Eco__five">
            <h1>Ecological olive oil - 5 litres</h1>
           
            <img className="Oil__Five__img" src={olej5l}  /> <p>
            
     This oil has been extracted from olives grown in olive trees cultivated whith  natural fertilizers, without using any chemical herbicides.
    
    
    <div>
   <h4>Format: Box of 4 bottles</h4> 
    
    <h4>Price: Ask about</h4>
    </div>
    </p>
    </div>
    
    <div className="Oil__Eco__four">
    <h1>Ecological olive oil - 3/4 litre</h1>
    <img className="Oil__Five__img" src={olej4l}  /> 
    <p>
  
    A totally natural oil, packed in the best package of all time, the glass, to keep all its fragrance and flavor.
    
  
    <div>
    <h4>Format: Box of 15 bottles</h4> 
    
    <h4>Price: Ask about</h4>
    </div>
</p>
        </div >
        </>
    );
}

export default BenefitsPage;