import React from 'react';

import './ProductCard.scss';


const ProductCard = (props) => {

const { cardItem } = props;
  return (
  <div className="productCard">
    <div className="card__box">
      <figure className="productCard__image">
        { cardItem.discount_percentage ? <span className="productCard__discount">{`${cardItem.discount_percentage}OFF`}</span> : ""}
        <img src={cardItem.image} alt={cardItem.name}/>
      </figure>
      <div className="productCard__details">
        <span className="productCard__title">{cardItem.name}</span>
        <div className="productCard__price">
          { cardItem.discount_percentage ? <span className="productCard__regularPrice">{cardItem.regular_price}</span> : ""}
          <span className="productCard__actualPrice"> {cardItem.actual_price}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
