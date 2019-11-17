import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'
import EcoOliveOil from '../pages/EcoOliveOil'
import ExtVirOliveOil from '../pages/ExtVirOliveOil'

const ProductPage = ({ match }) => {

    return (
        <>
            <div>Strona Productu</div>
            <Product id={match.params.id} />
            <Link to="/products">Powrot do strony produktu</Link>
        </>
    );
}

export default ProductPage;