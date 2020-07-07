import React, { useEffect, useState, createContext, useReducer } from 'react';

import api from '../../services/api';

import './HomeRoute.scss';
import ProductCardDisplay from '../../containers/ProductCardDisplay/ProductCardDisplay';
import FilterCardsComponent from '../../components/FilterCardsComponent/FilterCardsComponent';
import reducer, { KEYS, INITIAL_STATE, clear, updateValue } from "./duck";

export const ProductsContext = createContext();

const HomeRoute = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    var productResults;

    useEffect(() => {
      api.get('/catalog').then((response) => {
        dispatch(updateValue({ key: KEYS.fetchedProducts, value: response.data}));
      });
    }, []);

    useEffect( ( ) => {

      let selectedData = state.filteredProducts.length !== 0 ? state.filteredProducts : state.fetchedProducts;
      console.log('selected',selectedData)
      dispatch(updateValue({key: KEYS.products, value: selectedData}));

    },[state.fetchedProducts, state.filteredProducts]);

    const onClickFilterCategory = (selectedCategory) => {
      let alreadySelected = state.selectedCategories.find((item) => item === selectedCategory);
      if (alreadySelected) {
          let removeItem = state.selectedCategories.filter( (category) => category !== selectedCategory);
          dispatch(updateValue({key: KEYS.selectedCategories, value: removeItem}));
      }
      else { 
          dispatch(updateValue({key: KEYS.selectedCategories, value: [...state.selectedCategories, selectedCategory]}));
       }
      console.log('selectedCat',state.selectedCategories);
    }
    
    const getCategories = () => {
      let availableCategories = [];
      state.fetchedProducts.map( (category) => {
        let already = availableCategories.find((cat) => cat === category.color_slug);
        if(!already) { availableCategories.push(category.color_slug)}
      })
      dispatch(updateValue({ key: KEYS.categories, value: availableCategories}));
    }

    const filterProduct = () => {
      let filtered = state.fetchedProducts.filter ( (product) => state.selectedCategories.includes(product.color_slug) );
      dispatch(updateValue({key: KEYS.filteredProducts, value: filtered}))
    }

    const getNumberResults = () => {
      var results = state.filteredProducts.length !== 0 ? state.filteredProducts.length : state.fetchedProducts.length;
      productResults = results;
    }

    const filterHandler = () => {
      getCategories();
      dispatch(updateValue({key: KEYS.showCategoryFilter, value: !state.showCategoryFilter}))
    }
  
   
    console.log('state', state);
  return (
    <div className="home">
       <div className="container"> 
       
          <div className="filter">
              
              <button className="btn-filter" onClick={filterHandler}>Categoria</button>             
              <div className={ state.showCategoryFilter ? "filter__enabled" : "filter__disabled" }>
                  <ProductsContext.Provider value={state.categories}>
                    <FilterCardsComponent selecteds={state.selectedCategories} categoryHandler={onClickFilterCategory}  searchHandler={filterProduct}/>
                  </ProductsContext.Provider> 
              </div>
          </div>

            <div className="home__product__area">
              <span> Foram encontrados {state.products.length} produtos.</span>
              {/* <ProductCardDisplay fetchedProducts={filteredProduct.length !== 0 ? filteredProduct : state.fetchedProducts}/> */}
               <ProductCardDisplay products={state.products}/>

            </div>
       </div>
    </div>
  );
};

export default HomeRoute;
