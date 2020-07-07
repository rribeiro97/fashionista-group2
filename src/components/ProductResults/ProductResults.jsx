import React from 'react';
import { useState, useEffect } from "react";
import './ProductResults.scss';
import ProductResult from '../ProductResult';

const ProductResults = props => {
    const searched = props.searched;
    const products = props.products;

    if (products.length === 0 || searched.length < 3) {
        return (
            <div className="product__notFound">
                <span className="default-msg">Nenhum item encontrado :\</span>
            </div>
        );
    } else {
        return (
            <div className="product__list">
                {Object.keys(products).map(key => {
					return <ProductResult data={products[key]} />
			    })}
            </div>
        ); 
    }
};

export default ProductResults;