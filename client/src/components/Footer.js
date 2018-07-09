import React, { Component } from 'react';
import './Footer.css';
import logo from '../Metallica_wordmark.svg';
import { Link, Router } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <footer className='footer'>

                <a href="/home">
                    <img className='foot-img' src={logo} />
                </a>
            </footer>
        );
    }
}

