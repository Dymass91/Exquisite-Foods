import React from 'react';
import imgtown from '../images/town.jpg';
import olives2 from '../images/olives2.jpg';


const HomePage = () => {
    return (

        <div className="homePage">
            <h1 className="page_h1">Exquisite Foods</h1>

            <p>
                Our oils are produced in a village belonging to the route of the <strong className='bold-text'>“white villages”</strong>, located at the edge of Sierra de lijar, known for its suitability for air sports such as hang gliding and paragliding.<img className="townimg" src={imgtown} alt="miasto" />

                The lands of the village are primarily engaged in agriculture and the most important is the olive crop. The most common variety is the <strong className='bold-text'>"Lechin of Seville."</strong>


                                The olive growers in the nearby town of Zahara de la Sierra,  provide us with the bulk of olives, being the predominant variety "Manzanillo".

                                And from the nearby town of the Gastor, we also incorporate most of its olive production from partners we have in this town, being the most important variety also "Lechin".
                                <img className="olives2" src={olives2} alt="Olives" />
                                We count with an area of almost 6,000 hectares belonging to the villages mentioned above, also most farmers in the town of Grazalema deliver their production to the oil mill.

                Experts say that mixing olives of the Lechín and Manzanilla variety, we can produce one of the best oils in the world.

Knowing this, in <strong className='bold-text'>S.C.A. Nuestra Señora del Rosario</strong>, we made a great economic effort to have the latest technology, so we can produce and package our quality oils for our customers all around the world.</p>
        </div>

    );
}

export default HomePage;