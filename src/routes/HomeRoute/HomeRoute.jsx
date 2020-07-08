import React, { useEffect, useState, createContext, useReducer } from 'react';

import api from '../../services/api';

import './HomeRoute.scss';
import ProductCardDisplay from '../../containers/ProductCardDisplay/ProductCardDisplay';
import FilterCardsComponent from '../../components/FilterCardsComponent/FilterCardsComponent';
import reducer, { KEYS, INITIAL_STATE, clear, updateValue } from './duck';

export const ProductsContext = createContext();

const HomeRoute = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  var productResults;

  useEffect(() => {
    api.get('/catalog').then((response) => {
      dispatch(updateValue({ key: KEYS.fetchedProducts, value: response.data }));
    });
    
  }, []);

  useEffect(() => {
    let selectedData =
      state.filteredProducts.length !== 0
        ? state.filteredProducts
        : state.fetchedProductsID;
    console.log('selected', selectedData);
    dispatch(updateValue({ key: KEYS.products, value: selectedData }));
  }, [state.fetchedProductsID,state.filteredProducts,]);

  useEffect( () => {
    idGenerator();
  },[state.fetchedProducts]);

    //  Vamos ter que gerar um uuid... 
    const getProductByName = (name) => state.products.find(product => name === product.className);


    const idGenerator = () => {
      // debugger;
      const withIdProducts = [];
      const initial = state.fetchedProducts.map( (product) => {
        const normalizeName = product.name.toLowerCase().replace(/\s/g, "-")
        const idNormalized = `${normalizeName}-${product.code_color}`;
        const productWithID = {...product, id:idNormalized};
        withIdProducts.push(productWithID);
      })
      
      dispatch(updateValue({key: KEYS.fetchedProductsID, value:withIdProducts}));
    }

  const onClickFilterCategory = (selectedCategory) => {
    let alreadySelected = state.selectedCategories.find(
      (item) => item === selectedCategory
    );
    if (alreadySelected) {
      let removeItem = state.selectedCategories.filter(
        (category) => category !== selectedCategory
      );
      dispatch(
        updateValue({ key: KEYS.selectedCategories, value: removeItem })
      );
    } else {
      dispatch(
        updateValue({
          key: KEYS.selectedCategories,
          value: [...state.selectedCategories, selectedCategory],
        })
      );
    }
    console.log('selectedCat', state.selectedCategories);
  };

  const getCategories = () => {
    let availableCategories = [];
    state.fetchedProductsID.map((category) => {
      let already = availableCategories.find(
        (cat) => cat === category.color_slug
      );
      if (!already) {
        availableCategories.push(category.color_slug);
      }
    });
    dispatch(updateValue({ key: KEYS.categories, value: availableCategories }));
  };

  const filterProduct = () => {
    let filtered = state.fetchedProductsID.filter((product) =>
      state.selectedCategories.includes(product.color_slug)
    );
    dispatch(updateValue({ key: KEYS.filteredProducts, value: filtered }));
  };

  const clearFilter = () => {
    dispatch(updateValue({key: KEYS.filteredProducts, value :[] }));
    dispatch(updateValue({key: KEYS.selectedCategories, value : []}));
  }

  const getNumberResults = () => {
    var results =
      state.filteredProducts.length !== 0
        ? state.filteredProducts.length
        : state.fetchedProductsID.length;
    productResults = results;
  };

  const filterHandler = () => {
    getCategories();
    dispatch(
      updateValue({
        key: KEYS.showCategoryFilter,
        value: !state.showCategoryFilter,
      })
    );
  };
  
  console.log('state', state);
  return (
    <div className="home">
      <div className="container">
        <div className="filter">
          Filtre por:
          <button className="btn-filter" onClick={filterHandler}>
            Cor
          </button>
          <div
            className={
              state.showCategoryFilter ? 'filter__enabled' : 'filter__disabled'
            }
          >
            <ProductsContext.Provider value={state.categories}>
              <FilterCardsComponent
                selecteds={state.selectedCategories}
                categoryHandler={onClickFilterCategory}
                searchHandler={filterProduct}
                clearHandler={clearFilter}
              />
            </ProductsContext.Provider>
          </div>
        </div>

        <div className="home__product__area">
          <span> Foram encontrados {state.products.length} produtos.</span>
          {/* <ProductCardDisplay fetchedProducts={filteredProduct.length !== 0 ? filteredProduct : state.fetchedProducts}/> */}
          <ProductCardDisplay products={state.products} />
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
