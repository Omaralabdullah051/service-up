import React from 'react';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';
import './Header.css';

const Header = () => {
    return (
        <div className='h-12 bg-zinc-400'>
            <nav className='nav-bar'>
                <ul className='flex justify-center items-center p-2'>
                    <CustomActiveLink to="/">Home</CustomActiveLink>
                    <CustomActiveLink to="/checkout">Checkout</CustomActiveLink>
                    <CustomActiveLink to="/blogs">Blogs</CustomActiveLink>
                    <CustomActiveLink to="/About">About</CustomActiveLink>
                    <CustomActiveLink to="/login">Login</CustomActiveLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;