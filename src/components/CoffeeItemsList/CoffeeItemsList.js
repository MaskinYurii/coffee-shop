import React from 'react';
import CoffeeItem from "../CoffeeItem/CoffeeItem";

import './CoffeeItemsLIst.scss'

function CoffeeItemsList({data, countItems, needCountry}) {
    const coffeeItems = data.map((item, index) => {
        const {id, ...itemProps} = item;
        if(index < countItems){
            return <CoffeeItem
                key={id}
                {...itemProps}
                needCountry={needCountry}/>
        }
    })
    return (
        <div className="coffee-items">
            {coffeeItems}
        </div>
    );
}

export default CoffeeItemsList;