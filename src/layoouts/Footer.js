import React from 'react';
import '../styles/footer.css'


const Footer = () => {
    return (
        <>
            <div className="footer" >
                <div className="Contact__Details-footer">
                    <h4> Exquisite foods distributor limited
                    <br></br>

                    Company reg.12143850
                    <br></br>


                    Mobile contact: 07375081408
                        <br></br>
                    </h4>


                </div>



                <div className="googleMaps">
                    <iframe frameBorder="0" style={{ width: "100%", height: "45vh", borderRadius: '1.5rem' }}
                        src="https://www.google.com/maps/embed/v1/place?q=36.880606, -5.408098&amp;key=AIzaSyBj7ZA7DO2_mnpYz3SYZEeqAC56E9b7uyk">
                    </iframe>

                </div>
                <p className="footer_rights ">All rights reserved 2020</p>
            </div>

        </>
    );
}

export default Footer;