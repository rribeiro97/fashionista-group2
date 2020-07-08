import React, { useState, useEffect } from 'react';
import './SingleProduct.scss';
import './ProductRoute.scss';
import Magnifier from 'react-magnifier';
import ProductContent from '../../components/ProductContent';

import { useCart } from '../../hooks/cart';

const ProductRoute = (props) => {
  const { addToCart } = useCart();
  const { match } = props;
  const { id } = match.params;
  const [productSearch, setProductSearch] = useState(null);
  const API_URL = 'https://undefined.netlify.app/api/catalog';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          const withIdProducts = [];
          result.map((product) => {
            const normalizeName = product.name
              .toLowerCase()
              .replace(/\s/g, '-');
            const idNormalized = `${normalizeName}-${product.code_color}`;
            const productWithID = { ...product, id: idNormalized };
            withIdProducts.push(productWithID);
          });
          let testeFilter = withIdProducts.find((product) => product.id === id);
          setProductSearch(withIdProducts.find((product) => product.id === id));
        },
        (error) => {}
      );
  }, [id]);

  const [selectedSize, setSelectedSize] = useState('');

  function handleClick(e, sku) {
    setSelectedSize(sku);
  }

  return (
    <div>
      {productSearch != null && (
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
      )}
    </div>
  );
};

export default ProductRoute;
