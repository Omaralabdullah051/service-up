import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='h-12 bg-zinc-400 flex justify-center items-center'>
            <nav className='nav-bar'>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/checkout">Checkout</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/About">About</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;