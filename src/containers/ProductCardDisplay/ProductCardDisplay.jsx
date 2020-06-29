import React from 'react';
import './ProductCardDisplay.scss';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductCardDisplay = (props) => {
  
const { products } = props;

  return (
    <div className="cardArea">
        {products.map( (item) => {
            return (
                <ProductCard cardItem={item}/>
            )
        })}
    </div>
  );
};

export default ProductCardDisplay;
