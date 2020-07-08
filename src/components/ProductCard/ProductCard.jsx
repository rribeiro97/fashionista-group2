import React from 'react';
import './ProductCard.scss';
import { FaTshirt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const {cardItem} = props;

  return (
  <div className="productCard">
    <div className="card__box">
    <Link to={`/produto/${cardItem.id}`} >
      <figure className="productCard__image">
        { cardItem.discount_percentage ? <span className="productCard__discount">{`${cardItem.discount_percentage}OFF`}</span> : ""}
        <picture>
          <img src={cardItem.image ? cardItem.image : "/assets/img/404.png"} alt={cardItem.name}/>
        </picture>
        <div className="productCard__about"> 
            <span className="productCard__about_itemName">{cardItem.name}</span>
            <div className="productCard__about__text">
            <FaTshirt/>
              <h3> SAIBA MAIS </h3>
            </div>
        </div>
      </figure>
      </Link>
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
