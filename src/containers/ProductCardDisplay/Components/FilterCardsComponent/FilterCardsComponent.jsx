import React, { useState } from "react";
import "./FilterCardsComponent.css";
import CategoryCardComponent from '../../../../components/CategoryCardComponent/CategoryCardComponent';
import { Button } from "./node_modules/@material-ui/core";

 const FilterCardsComponent = (props) => {
    
    const { categoryItems, categoryHandler, selecteds } = props;
    let [isSelected,setIsSelected] = useState(false);
    const changeToSelected = () => {
        setIsSelected(!isSelected);
    }
    return(
    <React.Fragment>            
                <div className="category-modal filters-modal">
                    <h3>Filtre por categoria</h3>
                    <div className="category-cards">
                        <CategoryCardComponent selectedsArray={selecteds} cardSize={'sm'} selectedHandler={changeToSelected} categoryHandler={categoryHandler} categoryItems={categoryItems}/>
                    </div>
                    <Button> Pesquisar </Button>
                </div>
    </React.Fragment>
    );
}

export default FilterCardsComponent;







                