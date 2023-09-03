// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src='/assets/images/logo.jpg' />
                </Link>
                {/* Navbar Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/legality" className="nav-link">Legality</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/marriage">Marriage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/wedding">Wedding Story</Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
