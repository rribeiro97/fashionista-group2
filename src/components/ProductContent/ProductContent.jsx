import React, { useCallback, useState } from 'react';
import './ProductContent.scss';

import { useCart } from '../../hooks/cart';

const ProductContent = (props) => {
  const { product } = props;
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState({});

  const handleSizeSelect = useCallback(
    (size) => {
      setSelectedSize(size);
      console.log(size);
    },
    [setSelectedSize]
  );
  return (
    <div className="product__content">
      <h3 className="product__name">{product.name}</h3>
      <div className="product__pricing">
        <span className="product__price product__price--to">
          {product.actual_price}
        </span>
        <span className="product__price product__price--installments">
          {product.installments}
        </span>
      </div>

      <div className="product__sizes">
        <p className="product__sizes__title">Escolha o tamanho</p>
        <div className="product__btn-group">
          {product.sizes.length > 0 &&
            product.sizes
              .filter((item) => item.available === true)
              .map((size) => (
                <button
                  type="button"
                  className={`product__filter ${
                    selectedSize.sku === size.sku
                      ? 'product__filter--selected'
                      : ''
                  }`}
                  onClick={() => {
                    handleSizeSelect(size);
                  }}
                >
                  {size.size}
                </button>
              ))}
        </div>
      </div>

      <div className="product__actions">
        <button
          type="button"
          className="product__add-to-cart"
          onClick={() => addToCart(product, selectedSize)}
          disabled={selectedSize.sku ? false : true}
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
};

export default ProductContent;
