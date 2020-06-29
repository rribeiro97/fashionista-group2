import React, { useState, useEffect } from 'react';

import './HomeRoute.scss';
import ProductCardDisplay from '../../containers/ProductCardDisplay/ProductCardDisplay';
import Filter from '../../components/Filter/Filter';

const HomeRoute = () => {

    const [products,setProducts] = useState([]);
    let numberResults = products.length;

    useEffect(() => {
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then( (response) => {
        return response.json();
      }).then( (data) => {
        setProducts(data);
      });
    },[]);

    console.log(products)

  return (
    <div className="home">
       <div className="container"> 
            <div className="home__filter__bar">
                <Filter numberResults={numberResults} />
            </div>

            <div className="home__product__area">
                <ProductCardDisplay products={products}/>
            </div>

       </div>
    </div>
  );
};

export default HomeRoute;
