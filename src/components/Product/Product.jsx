import React from "react";
import "./Product.scss";

const Product = (props) => {
  props = {
    name: "REGATA ALCINHA FOLK",
    vista: "",
    prazo: "",
    escolheTamanho: "",
  };

  return (
    <div>
      <div className="single-product">
        <figure className="product__image">
          <img
            src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578"
            alt=""
          />
        </figure>
        <div className="product__content">
          <h3 className="product__name">{props.name}</h3>
          <div className="product__pricing">
            <span className="product__price product__price--to">R$ 99,90</span>
            <span className="product__price product__price--installments">
              em até 3x R$ 33,30
            </span>
          </div>
          <div className="product__sizes">
            <p className="product__sizes__title">Escolha o tamanho</p>
            <div className="product__btn-group">
              <h1>Botoes de Tamanho</h1>
            </div>
          </div>
          <div className="product__actions">
            <button type="button" className="product__add-to-cart">
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>
      <div className="drawer">
        <div className="drawer__content"></div>
      </div>
    </div>
  );
};

export default Product;
