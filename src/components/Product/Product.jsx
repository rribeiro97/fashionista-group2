import React, { useState } from "react";
import "./SingleProduct.scss";
import "./Product.scss";

const Product = (props) => {
  const [selectedSize, setSelectedSize] = useState("");

  props = {
    name: "REGATA ALCINHA FOLK",
    style: "20002570",
    code_color: "20002570_614",
    color_slug: "preto",
    color: "PRETO",
    on_sale: false,
    regular_price: "R$ 99,90",
    actual_price: "R$ 99,90",
    discount_percentage: "",
    installments: "3x R$ 33,30",
    image:
      "https://d3l7rqep7l31az.cloudfront.net/images/products/20002570_002_catalog_1.jpg?1459948578",
    sizes: [
      {
        available: true,
        size: "PP",
        sku: "5723_40130843_0_PP",
      },
      {
        available: true,
        size: "P",
        sku: "5723_40130843_0_P",
      },
      {
        available: true,
        size: "M",
        sku: "5723_40130843_0_M",
      },
      {
        available: true,
        size: "G",
        sku: "5723_40130843_0_G",
      },
      {
        available: true,
        size: "GG",
        sku: "5723_40130843_0_GG",
      },
    ],
  };

  function handleClick(e, sku) {
    console.log("chico clicou");
    setSelectedSize(sku);
  }

  return (
    <div>
      <div className="single-product">
        <figure className="product__image">
          <img src={props.image} alt="Product" />
        </figure>
        <div className="product__content">
          <h3 className="product__name">{props.name}</h3>
          <div className="product__pricing">
            <span className="product__price product__price--to">
              {props.actual_price}
            </span>
            <span className="product__price product__price--installments">
              {props.installments}
            </span>
          </div>
          <div className="product__sizes">
            <p className="product__sizes__title">Escolha o tamanho</p>
            <div className="product__btn-group">
              {props.sizes.length > 0 &&
                props.sizes
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
      </div>
      <div className="drawer">
        <div className="drawer__content"></div>
      </div>
    </div>
  );
};

export default Product;
