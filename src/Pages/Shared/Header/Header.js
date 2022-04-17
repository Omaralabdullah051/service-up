import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='h-12 bg-zinc-400'>
            <nav className='nav-bar'>
                <ul className='flex justify-center items-center p-2'>
                    <CustomActiveLink to="/">Home</CustomActiveLink>
                    <CustomActiveLink to="/checkout">Checkout</CustomActiveLink>
                    <CustomActiveLink to="/blogs">Blogs</CustomActiveLink>
                    <CustomActiveLink to="/About">About</CustomActiveLink>
                    {
                        user ? <button onClick={() => signOut(auth)}>Signout</button> :
                            <CustomActiveLink to="/login">Login</CustomActiveLink>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;