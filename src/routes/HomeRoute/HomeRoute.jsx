import React, { useState, useEffect } from 'react';

import './HomeRoute.scss';
import ProductCardDisplay from '../../containers/ProductCardDisplay/ProductCardDisplay';
import Filter from '../../components/Filter/Filter';
import { fakeApi } from '../../services/fakeApi';

const HomeRoute = () => {
  const [products, setProducts] = useState([]);
  let numberResults = products.length;

  useEffect(() => {
    setProducts(fakeApi);
    // fetch('https://undefined.netlify.app/api/catalog')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setProducts(data);
    //   });
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__filter__bar">
          <Filter numberResults={numberResults} />
        </div>

        <div className="home__product__area">
          <ProductCardDisplay products={products} />
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
