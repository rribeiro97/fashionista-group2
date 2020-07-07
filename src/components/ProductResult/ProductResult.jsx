import React from 'react';
import './ProductResult.scss';

const ProductResult = props => {
    const data = props.data;

    return (
        <div className="product__list__item">
            <div className="product__list__row">
                <img className="product__image" src={data.image} alt={ data.name } />
                <div className="product__list__info">
                    <div className="product__list__name">{ data.name }</div>
                    <ul className="product__list__size">
                        {Object.keys(data.sizes).map(key => {
                        return <li className="size_item">{ data.sizes[key].size }</li>
                        })}
                    </ul>
                </div>
                <div className="product__list__pricing">
                    <div className="product__list__current">{data.actual_price}</div>
                    <div className="product__list__installments">{data.installments}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductResult;