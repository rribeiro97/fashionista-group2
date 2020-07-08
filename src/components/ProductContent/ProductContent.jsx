import React from "react";
import "./ProductContent.scss";

const ProductContent = (props) => {
  const { product, selectedSize, handleClick } = props;

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
                      selectedSize === size.sku
                        ? "product__filter--selected"
                        : ""
                    }`}
                    onClick={(event) => {
                      handleClick(event, size.sku);
                    }}
                  >
                    {size.size}
                  </button>
                ))}
          </div>
        </div>

        <div className="product__actions">
          <button type="button" className="product__add-to-cart">
            Adicionar à Sacola
          </button>
        </div>
        
      </div>
  );
};

export default ProductContent;
