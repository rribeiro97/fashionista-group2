import React, { useContext } from "react";
import "./CategoryCardComponent.scss";
import { ProductsContext } from "../../routes/HomeRoute/HomeRoute";

 const CategoryCardComponent = (props) => {
    const { cardSize, categoryHandler, selectedHandler, selectedsArray } = props;
    const size = cardSize  === 'sm' ? 'small-card': 'large-card';
    const categoryItems = useContext(ProductsContext);

    return(
    <React.Fragment>            
                {categoryItems.map((item) => {
                    let hasClass = selectedsArray.includes(item) ? "selected" : "";
                    return (
                        <div className="category-selector" key={`${item}DxvsS`}>
                            <div onChange={selectedHandler} >
                                <span  id={item.code_color} key={`${item}DkZx`} onClick={() => { selectedHandler(); categoryHandler(item)}} className={`${size} ${hasClass}`}>{item} </span>
                            </div>
                        </div>
                    )
                })}
    </React.Fragment>
    );
}

export default CategoryCardComponent;