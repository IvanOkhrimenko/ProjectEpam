import React, { Component } from 'react';
import './Header.css';
import { Link, Router } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='nav'>
                    <ul className="navbar">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/band">Band</Link></li>
                        <li><Link to="/music">Music</Link></li>
                        <li><Link to="/tour">Tour</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}

