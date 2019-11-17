import React from 'react';
import ProductListPage from '../pages/ProductListPage';
import EcoOliveOil from '../pages/EcoOliveOil'
import ExtVirOliveOil from '../pages/ExtVirOliveOil'

const Product = (props) => {
    return (
        <article className="product">
            <h1>{props.id}</h1>
            <EcoOliveOil />
        </article>
    )
}

export default Product