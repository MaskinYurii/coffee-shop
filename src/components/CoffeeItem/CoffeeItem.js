import React from 'react';

import './CoffeeItem.scss';
function CoffeeItem(props) {
    const {name, weight, price, image, country, needCountry} = props;
    const countryName = needCountry ? <div className="coffee-item__country">{country}</div> : '';
    return (
       <div className="coffee-item">
           <div className='coffee-item__img'>
               <img src={image} alt="coffee-image"/>
           </div>

           <h3 className="coffee-item__title">{name} {weight}</h3>
           {countryName}
           <div className="coffee-item__price">{price}$</div>
       </div>
    );
}

export default CoffeeItem;