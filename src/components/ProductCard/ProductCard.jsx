import React, { useContext } from 'react';

import './ProductCard.scss';
import { Link } from 'react-router-dom';

import { ProductContext } from '../../containers/App/App'; 

import reducer, { KEYS, INITIAL_STATE, clear, selectProduct } from '../../containers/App/duck';


const ProductCard = (props) => {

  const productContext = useContext(ProductContext);

  const handleClick = () => {
    productContext.productDispatch(selectProduct({ key: KEYS.selectedProduct, value: cardItem }))

    console.log("teste CONTEXT" + productContext.productState.selectedProduct)
  }


  const { cardItem } = props;
  return (
  <div className="productCard" onClick={handleClick}>
    <div className="card__box">
    <Link to={`/produto/${cardItem.name}`}>
      <figure className="productCard__image">
        { cardItem.discount_percentage ? <span className="productCard__discount">{`${cardItem.discount_percentage}OFF`}</span> : ""}
        <img src={cardItem.image} alt={cardItem.name}/>
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
