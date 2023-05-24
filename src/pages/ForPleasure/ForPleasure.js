import React from 'react';
import Footer from "../../components/Footer/Footer";
import './ForPleasure.scss'
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import CoffeeItemsList from "../../components/CoffeeItemsList/CoffeeItemsList";
import coffeeDB from "../../CoffeeDB";

function ForPleasure() {
    return (
        <div className='pleasure'>
            <header className="header">
                For your pleasure
            </header>
            <main className='main'>
               <div className="container">
                   <AboutBlock
                       title="About our goods"
                       imgSrc='./../../img/about-goods.jpg'/>

                   <div className="main__goods-items">
                       <CoffeeItemsList
                           countItems={6}
                           needCountry
                           data={coffeeDB}
                       />
                   </div>
               </div>
            </main>
            <Footer/>
        </div>


    );
}

export default ForPleasure;