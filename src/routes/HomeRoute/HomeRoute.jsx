import React, { useState, useEffect } from 'react';

import './HomeRoute.scss';


const HomeRoute = () => {

    const [products,setProducts] = useState([]);


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
                <button> Filtre por cor </button>
                <span>{`${products.length} itens encontrados`}</span>
            </div>

            <div className="home__product__area">
                
            </div>

       </div>
    </div>
  );
};

export default HomeRoute;
