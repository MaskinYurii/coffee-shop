import React, {Component} from 'react';
import Footer from "../../components/Footer/Footer";

import './OurCoffee.scss';
import AboutBlock from "../../components/AboutBlock/AboutBlock";
import CoffeeItemsList from "../../components/CoffeeItemsList/CoffeeItemsList";
import SearchPanel from "../../components/SearchPanel/SearchPanel";
import Filter from "../../components/Filter/Filter";
import CoffeeDB from "../../CoffeeDB";

class OurCoffee extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: CoffeeDB,
            term: "",
            filter: 'all'
        }
    }

    searchCoffee = (items, term) => {
        if(term.length < 1){
            return items;

        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch(filter){
            case 'brazil':
                return items.filter(item => item.country === "Brazil")
            case 'kenya':
                return items.filter(item => item.country === "Kenya")
            case 'columbia':
                return items.filter(item => item.country === "Columbia")
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}))
    };

    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchCoffee(data, term), filter)
        return (
            <div className='our-coffee'>
                <header className="header">
                    Our Coffee
                </header>
                <main className='main'>
                    <div className="container">

                        <AboutBlock
                            title="About our beans"
                            imgSrc='./../../img/about-beans.jpg'/>

                        <div className="main__goods">
                            <div className="main__panel">
                                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                                <Filter
                                    filter={filter}
                                    onFilterSelect={this.onFilterSelect}/>
                            </div>
                            <CoffeeItemsList
                                countItems={6}
                                needCountry
                                data={visibleData}/>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default OurCoffee;