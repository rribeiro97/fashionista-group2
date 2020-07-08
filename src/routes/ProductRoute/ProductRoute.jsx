import React, { useState, useEffect, useReducer } from "react";
import "./SingleProduct.scss";
import "./ProductRoute.scss";
import Magnifier from "react-magnifier";
import ProductContent from "../../components/ProductContent";

import { useCart } from '../../hooks/cart';
import reducer, { KEYS, INITIAL_STATE, clear, updateValue } from '../HomeRoute/duck';


const ProductRoute = (props) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { addToCart } = useCart();
  const { match } = props;
  const { id } = match.params;
  const [productSearch, setProductSearch] = useState({});
  const API_URL = 'https://undefined.netlify.app/api/catalog';
  
  useEffect(() => {
    function fetchData() {
      const response = fetch(API_URL);
      const result = response.json();
      
      const withIdProducts = [];
      result.map( (product) => {
        const normalizeName = product.name.toLowerCase().replace(/\s/g, "-");
        const idNormalized = `${normalizeName}-${product.code_color}`;
        const productWithID = {...product, id:idNormalized};
        withIdProducts.push(productWithID);
      })
      setProductSearch(withIdProducts.find(product => product.id === id));
    }
    fetchData();
  });


  const [selectedSize, setSelectedSize] = useState('');

  function handleClick(e, sku) {
    setSelectedSize(sku);
  }

  return (
    <div>
      <div className="single-product">
        <figure className="product__image">
          {/* <img src={props.image} alt="Product" /> */}
          <Magnifier
            zoomFactor={1.3}
            mgWidth={180}
            mgHeight={180}
            mgShape="square"
            src={productSearch.image}
            alt={`Produto ${productSearch.image.name}`}
          />
        </figure>
        <ProductContent
          product={productSearch}
          selectedSize={selectedSize}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductRoute;
