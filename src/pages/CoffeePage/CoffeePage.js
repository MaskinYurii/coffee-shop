import React from 'react';
import {useParams} from "react-router";


import coffeeDB from "../../CoffeeDB";
import Footer from "../../components/Footer/Footer";

import './CoffeePage.scss';

function CoffeePage() {
    const { id } = useParams();
    const {price, description, mainImage, country} = coffeeDB[id-1];
    return (
        <div className="coffee-page">
            <header className="header coffee-page__header">
                Our Coffee
            </header>
            <main>
                <div className="coffee-page__wrapper">
                    <div className="coffee-page__image">
                        <img src={mainImage} alt="image"/>
                    </div>

                    <div className="coffee-page__content">
                        <h2 className="title">About it</h2>
                        <div className="outline coffee-page__outline"></div>

                        <div className="coffee-page__info">
                            <p className="coffee-page__info-item">
                                <span>Country:</span> {country}
                            </p>
                            <p className="coffee-page__info-item">
                                <span>Description:</span> {description}
                            </p>
                            <p className="coffee-page__info-item coffee-page__info-item_price">
                                <span>Price:</span> {price}$
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default CoffeePage;