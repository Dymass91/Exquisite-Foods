import React from 'react';
import '../styles/footer.css'


const Footer = () => {
    return (
        <>
            <div className="footer" >
                <div className="Contact__Details-footer">
                    S.C.A. NTRA. SRA. DEL ROSARIO
                    <br></br>
                            Avda. Manuel Pimentel, s/n
                        <br></br>
                            11.680 Algodonales (Cádiz)
<br></br>
                            Phone: +(34) 956 13 71 56
                        <br></br>
                            Fax: +(34) 956 13 77 01
</div>
                <p className="footer_rights">All rights reserved 2020</p>

            </div>
            <div className="googleMaps">
                <iframe frameBorder="0" style={{ width: "100%", height: "50vh", borderRadius: '1.5rem', lineHeight: "100%" }}
                    src="https://www.google.com/maps/embed/v1/place?q=36.880606, -5.408098&amp;key=AIzaSyBj7ZA7DO2_mnpYz3SYZEeqAC56E9b7uyk">
                </iframe>

            </div>
        </>
    );
}

export default Footer;