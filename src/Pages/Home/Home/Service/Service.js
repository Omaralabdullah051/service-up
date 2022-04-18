import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img, discription } = service;
    const navigate = useNavigate();

    const navigateToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <div className='border-2 rounded-lg p-4 md:px-8 space-y-1 md:space-y-2 bg-slate-600 text-white mb-8 md:mb-8'>
            <img className='mx-auto mb-3 md:mb-8 h-60 lg:h-80 xl:h-3/6' src={img} alt="" />
            <p className='font-semibold md:text-xl'>{name}</p>
            <p className='md:text-xl'>{price}</p>
            <p className='text-xs md:text-sm xl:text-base text-justify'>{`${discription.slice(0, 280)}.....................`}</p>
            <button onClick={navigateToCheckout} className='p-2 bg-slate-800 mt-8 text-white rounded block mx-auto'>Checkout</button>
        </div>
    );
};

export default Service;