import React from 'react';
import {NavLink} from "react-router-dom";

import './Navbar.scss';

function Navbar(props) {
    const navClassName = `nav nav_${props.theme} nav_${props.position}`;
    return (
            <nav className={navClassName}>
                <NavLink to="/" className='nav__logo'>
                    <div className="nav__logo-img"></div>
                    <div>Coffee house</div>
                </NavLink>

                <NavLink to="/OurCoffee" className="nav__link-item">Our coffee</NavLink>
                <NavLink to="/ForPleasure" className="nav__link-item">For your pleasure</NavLink>

            </nav>
    );
}

export default Navbar;