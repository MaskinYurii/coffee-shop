import React from 'react';
import Footer from "../../components/Footer/Footer";
import './ForPleasure.scss'
import AboutBlock from "../../components/AboutBlock/AboutBlock";

function ForPleasure() {
    return (
        <div className='pleasure'>
            <header className="header">
                For your pleasure
            </header>
            <main className='main'>
                <AboutBlock
                    title="About our goods"
                    imgSrc='./../../img/about-goods.jpg'/>
            </main>
            <Footer/>
        </div>


    );
}

export default ForPleasure;