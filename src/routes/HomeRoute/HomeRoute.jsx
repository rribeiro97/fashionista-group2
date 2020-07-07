import React, { useEffect, useContext, createContext, useReducer } from 'react';

import api from '../../services/api';

import './HomeRoute.scss';
import ProductCardDisplay from '../../containers/ProductCardDisplay/ProductCardDisplay';
import FilterCardsComponent from '../../components/FilterCardsComponent/FilterCardsComponent';
import reducer, { KEYS, INITIAL_STATE, clear, updateValue } from '../../containers/App/duck';

import { ProductContext } from '../../containers/App/App';

const HomeRoute = () => {
  
  const productContext = useContext(ProductContext);
  
  var productResults;

  useEffect(() => {
    api.get('/catalog').then((response) => {
      productContext.productDispatch(updateValue({ key: KEYS.fetchedProducts, value: response.data }));
    });
  }, [productContext]);
  //  Vamos ter que gerar um uuid... 
  const getProductByName = (name) => productContext.productState.products.find(product => name === product.className);

  useEffect(() => {
    
    let selectedData =
      productContext.productState.filteredProducts.length !== 0
        ? productContext.productState.filteredProducts
        : productContext.productState.fetchedProducts;
    console.log('selected', selectedData);
    productContext.productDispatch(updateValue({ key: KEYS.products, value: selectedData }));
  }, [productContext]);


  const onClickFilterCategory = (selectedCategory) => {
    let alreadySelected = productContext.productState.selectedCategories.find(
      (item) => item === selectedCategory
    );
    if (alreadySelected) {
      let removeItem = productContext.productState.selectedCategories.filter(
        (category) => category !== selectedCategory
      );
      productContext.productDispatch(
        updateValue({ key: KEYS.selectedCategories, value: removeItem })
      );
    } else {
      productContext.productDispatch(
        updateValue({
          key: KEYS.selectedCategories,
          value: [...productContext.productState.selectedCategories, selectedCategory],
        })
      );
    }
    console.log('selectedCat', productContext.productState.selectedCategories);
  };

  const getCategories = () => {
    let availableCategories = [];
    productContext.productState.fetchedProducts.map((category) => {
      let already = availableCategories.find(
        (cat) => cat === category.color_slug
      );
      if (!already) {
        availableCategories.push(category.color_slug);
      }
    });
    productContext.productDispatch(updateValue({ key: KEYS.categories, value: availableCategories }));
  };

  const filterProduct = () => {
    let filtered = productContext.productState.fetchedProducts.filter((product) =>
      productContext.productState.selectedCategories.includes(product.color_slug)
    );
    productContext.productDispatch(updateValue({ key: KEYS.filteredProducts, value: filtered }));
  };

  const getNumberResults = () => {
    var results =
      productContext.productState.filteredProducts.length !== 0
        ? productContext.productState.filteredProducts.length
        : productContext.productState.fetchedProducts.length;
    productResults = results;
  };

  const filterHandler = () => {
    getCategories();
    productContext.productDispatch(
      updateValue({
        key: KEYS.showCategoryFilter,
        value: !productContext.productState.showCategoryFilter,
      })
    );
  };

  console.log('productContext.productState', productContext.productState);
  return (
    <div className="home">
      <div className="container">
        <div className="filter">
          <button className="btn-filter" onClick={filterHandler}>
            Categoria
          </button>
          <div
            className={
              productContext.productState.showCategoryFilter ? 'filter__enabled' : 'filter__disabled'
            }
          >
           
              <FilterCardsComponent
                selecteds={productContext.productState.selectedCategories}
                categoryHandler={onClickFilterCategory}
                searchHandler={filterProduct}
              />
            
          </div>
        </div>

        <div className="home__product__area">
          <span> Foram encontrados {productContext.productState.products.length} produtos.</span>
          {/* <ProductCardDisplay fetchedProducts={filteredProduct.length !== 0 ? filteredProduct : productContext.productState.fetchedProducts}/> */}
          <ProductCardDisplay products={productContext.productState.products} />
        </div>
      </div>
    </div>
  );
};

export default HomeRoute;
