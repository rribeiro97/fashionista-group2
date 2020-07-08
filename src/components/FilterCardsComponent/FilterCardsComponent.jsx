import React, { useState } from "react";
import "./FilterCardsComponent.scss";
import CategoryCardComponent from '../../components/CategoryCardComponent/CategoryCardComponent';


 const FilterCardsComponent = (props) => {
    
    const {categoryHandler, selecteds, searchHandler, clearHandler } = props;
    let [isSelected,setIsSelected] = useState(false);
    const changeToSelected = () => {
        setIsSelected(!isSelected);
    }
    return(
    <React.Fragment>            
        <div className="category-modal filters-modal">
            <h3>Filtre por cor</h3>
            <div className="category-cards">
                <CategoryCardComponent selectedsArray={selecteds} cardSize={'sm'} selectedHandler={changeToSelected} categoryHandler={categoryHandler}/>
            </div>
            <button className="category__search--button" onClick={searchHandler}> Pesquisar </button>
            <button className="category__clear--button" onClick={clearHandler}> Limpar </button>
        </div>
    </React.Fragment>
    );
}

export default FilterCardsComponent;







                