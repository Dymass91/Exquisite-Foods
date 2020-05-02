import React from 'react';
import "../styles/BenefitsPage.css";
import benefitsimg from '../images/benefitsimg.jpg';

const BenefitsPage = () => {
    return (
        <div className="Benefits__article">
            <h1 className="page_h1">Health benefits</h1>
            <p>
                Olive oil is the key ingredient and a characteristic component of the Mediterranean diet, but is also a food that benefits the human body in many ways.

                Olive oil intake through the diet reduces the effect of blood cholesterol and provides a high vitamin content. Olive oil is composed mainly of oleic acid, which represents about 75% of the total, but also is rich in vitamin E, beta carotene and other antioxidants.
                <img className="benefitsimg" src={benefitsimg} alt="miasto" />
                Virgin olive oil is the only oil that can be obtained by physical processes: the juice of the olive. It helps prevent, among others, <strong className='bold-text'>diabetes, breast </strong> and <strong className='bold-text'> colon cancer</strong>., and <strong className='bold-text'>cardiovascular diseases</strong>.

                The fats that provide greater benefits to health are the monounsaturated fats, so they  should be consumed largely replacing other saturated (animal fats, coconut and palm oils) and polyunsaturated (seed oils).

                Virgin Olive Oil is considered the exemplary fat, for the amount of oleic acid it contains. Oleic acid increases the good <strong className='bold-text'>"cholesterol" (HDL)</strong> that exerts a protective role as it carries the <strong className='bold-text'>"bad cholesterol" (LDL)</strong>-deposited in the arteries, to the liver for disposal, reducing the risk of arterial thrombosis and infarction.

</p>
        </div >
    );
}

export default BenefitsPage;