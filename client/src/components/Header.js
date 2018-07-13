import React, { Component } from 'react';
import '../components/css/Header-footer.css';

import { Link, Router } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='nav'>
                <ul className="navbar">
                    <li><Link to="/home">Home</Link></li>
                    <li>
                        <a>Band</a>
                        <div class="submenu">
                            <ul>
                                <li><Link to="/band">Members</Link></li>
                                <li><Link to="/history">History</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/tour">Tour</Link></li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
