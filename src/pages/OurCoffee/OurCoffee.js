import React from 'react';
import Footer from "../../components/Footer/Footer";

import './OurCoffee.scss';
import AboutBlock from "../../components/AboutBlock/AboutBlock";
function OurCoffee(props) {
    return (
        <div className='our-coffee'>
            <header className="header">
                Our Coffee
            </header>
            <main className='main'>
                <AboutBlock
                    title="About our beans"
                    img='./../../img/about-beans.jpg'/>
            </main>
            <Footer/>
        </div>
    );
}

export default OurCoffee;