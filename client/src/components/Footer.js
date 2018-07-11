import React, { Component } from 'react';
import '../components/css/Header-footer.css';
import logo from '../Metallica_wordmark.svg';
const Footer = () => {
    return (
        <footer className='footer'>

            <a href="/home">
                <img className='foot-img' src={logo} />
            </a>
        </footer>
    );
}
export default Footer;

