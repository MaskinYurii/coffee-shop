import React from 'react';
import {NavLink} from "react-router-dom";

import CoffeeItem from "../CoffeeItem/CoffeeItem";

import './CoffeeItemsLIst.scss'

function CoffeeItemsList({data, countItems, needCountry}) {
    const coffeeItems = data.map((item, index) => {
        const {id, ...itemProps} = item;
        if(index < countItems){
            return <NavLink to={`/good/`+ item.id} style={{textDecoration: 'none'}}>
                <CoffeeItem
                    key={id}
                    {...itemProps}
                    needCountry={needCountry}/>
            </NavLink>
        }
    })
    return (
        <div className="coffee-items">
            {coffeeItems}
        </div>
    );
}

export default CoffeeItemsList;