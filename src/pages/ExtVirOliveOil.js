import React from 'react';
import "../styles/ExtOliveOil.css";
import olejcan from '../images/olejcan.jpg';
import extravirginoil from '../images/Extravirginoil.jpg';
import extravirginoilsmall from '../images/Extravirginoilsmall.jpg';


const ExtOlivePage = () => {
    return (
        <>
        <div className="Oil__Ext__five__can">
            <h1>Extra virgin oil - 5 litres can</h1>
           
            <img className="Oil__ext__img" src={olejcan}  /> <p>
            
            Can of 5 liters of oil with denomination of origin "Sierra de Cádiz". This modern format stands out for its convenience and ease of use and storage, and for the denomination of origin "Sierra de Cádiz".
    
    
    <div>
   <h4>Format: Box of 6 cans</h4> 
    
    <h4>Price: Ask about</h4>
    </div>
    </p>
    </div>
    
    <div className="Oil__Ext__five__bottle">
    <h1>Extra virgin oil - 5 litres</h1>
    <img className="Oil__ext__img" src={extravirginoil}  /> 
    <p>
  
    5 liter bottle of extra virgin olive oil. Probably, this is the format preferred by housewives, because it is the cheapest and also because it has more quantity.
    
  
    <div>
    <h4>Format: Box of 4 bottles</h4> 
    
    <h4>Price: Ask about</h4>
    </div>
</p>
        </div >

        <div className="Oil__Ext__four__bottle">
    <h1>Extra virgin oil - 3/4 litres</h1>
    <img className="Oil__ext__img" src={extravirginoilsmall}  /> 
    <p>
  
    Our flagship product, packaged in the best package of all time, the glass, to keep all its fragrance and flavor. Specially manufactured, packaged raw (unfiltered) to satisfy the most demanding palates.
    
  
    <div>
    <h4>Format: Box of 15 bottles.</h4> 
    
    <h4>Price: Ask about</h4>
    </div>
</p>
        </div >
        </>
    );
}

export default ExtOlivePage;