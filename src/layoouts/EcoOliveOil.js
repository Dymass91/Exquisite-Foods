import React from 'react';
import "../styles/BenefitsPage.css";
import benefitsimg from '../images/benefitsimg.jpg';

const BenefitsPage = () => {
    return (
        <div className="Benefits__article">
            <h1>Health benefits</h1>
            <p>
                Olive oil is the key ingredient and a characteristic component of the Mediterranean diet, but is also a food that benefits the human body in many ways.
                <img className="benefitsimg" src={benefitsimg} alt="miasto" />
                Olive oil intake through the diet reduces the effect of blood cholesterol and provides a high vitamin content. Olive oil is composed mainly of oleic acid, which represents about 75% of the total, but also is rich in vitamin E, beta carotene and other antioxidants.

                Virgin olive oil is the only oil that can be obtained by physical processes: the juice of the olive. It helps prevent, among others, diabetes, breast and colon cancer, and cardiovascular diseases.

                The fats that provide greater benefits to health are the monounsaturated fats, so they should be consumed largely replacing other saturated (animal fats, coconut and palm oils) and polyunsaturated (seed oils).

                Virgin Olive Oil is considered the exemplary fat, for the amount of oleic acid it contains. Oleic acid increases the "good cholesterol" (HDL) that exerts a protective role as it carries the "bad cholesterol" (LDL)-deposited in the arteries, to the liver for disposal, reducing the risk of arterial thrombosis and infarction.

</p>
        </div>
    );
}

export default BenefitsPage;