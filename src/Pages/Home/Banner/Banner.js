import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='banner'>
            <div className='container'>
                <div className='title-container'>
                    <h4 className='font-bold text-slate-800 md:text-5xl'>Sports Photographer Services</h4>
                    <p className='text-justify pr-8'>High-quality photography is critical in capturing and engaging the attention of the players.So the pictures shade and landscapes are not efficiently applied at that momment. Professionally shotage and some helpful services is the solution. Here we are intruducing the most efficient way to chapture the high long range pictures and provides some eye catching services that might be helpful for you.</p>
                    <button onClick={() => navigate('/info')} className='p-2 bg-slate-700 text-white rounded mt-2'>Explore Our Albums</button>
                </div>
                <div>
                    <img className='mx-auto' src="https://i.postimg.cc/sgYz2cF5/photographer.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;