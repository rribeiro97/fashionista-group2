import React, { useState } from "react";
import "./FilterCardsComponent.scss";
import CategoryCardComponent from '../../components/CategoryCardComponent/CategoryCardComponent';


 const FilterCardsComponent = (props) => {
    
    const {categoryHandler, selecteds, searchHandler } = props;
    let [isSelected,setIsSelected] = useState(false);
    const changeToSelected = () => {
        setIsSelected(!isSelected);
    }
    return(
    <React.Fragment>            
        <div className="category-modal filters-modal">
            <h3>Filtre por categoria</h3>
            <div className="category-cards">
                <CategoryCardComponent selectedsArray={selecteds} cardSize={'sm'} selectedHandler={changeToSelected} categoryHandler={categoryHandler}/>
            </div>
            <button onClick={searchHandler}> Pesquisar </button>
        </div>
    </React.Fragment>
    );
}

export default FilterCardsComponent;







                