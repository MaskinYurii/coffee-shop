import React from 'react';
import Navbar from "../Navbar/Navbar";

import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <Navbar theme='black' position='relative'/>
            <div className="outline footer__outline"></div>
        </footer>
    );
}

export default Footer;