import React from 'react';

import Navbar from "../../components/Navbar/Navbar";


import './Home.scss'
import CoffeeDB from "../../CoffeeDB";
import CoffeeItem from "../../components/CoffeeItem/CoffeeItem";
import Footer from "../../components/Footer/Footer";

function Home() {

    const coffeeItems = CoffeeDB.map((item, index) =>{
       const {id, ...itemProps} = item;
        if(index < 3){
            return <CoffeeItem
                key={id}
                {...itemProps}
                needCountry={false}/>
        }
    })

    return (
        <div className="home">

            <section className="main">
                <div className="container">
                    <h1 className='main__title'>Everything You Love About Coffee</h1>
                    <div className="outline outline_white main__outline"></div>
                    <div className="main__subtitle">
                        <p>We makes every day full of energy and taste</p>
                        <p>Want to try our beans?</p>
                    </div>
                    <button className="main__btn">More</button>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <h2 className="title">About Us</h2>
                    <div className="outline about__outline"></div>
                    <p className="about__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br/><br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </section>

            <section className="best">
                <div className="container">
                    <h2 className="title best__title">Our Best</h2>
                    <div className="best__wrapper">
                        {coffeeItems}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Home;