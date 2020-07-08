import React, { useState } from "react";
import "./SingleProduct.scss";
import "./ProductRoute.scss";
import Magnifier from "react-magnifier";
import ProductContent from "../../components/ProductContent";

const ProductRoute = (props) => {
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
          {/* <img src={props.image} alt="Product" /> */}
          <Magnifier
            zoomFactor={1.3}
            mgWidth={180}
            mgHeight={180}
            mgShape="square"
            src={props.image}
            alt={`Produto ${props.image.name}`}
          />
        </figure>
        <ProductContent
          product={props}
          selectedSize={selectedSize}
          handleClick={handleClick}
        />
      </div>
      <div className="drawer">
        <div className="drawer__content"></div>
      </div>
    </div>
  );
};

export default ProductRoute;
