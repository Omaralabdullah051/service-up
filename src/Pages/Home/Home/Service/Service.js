import React from 'react';

const Service = ({ service }) => {
    const { name, price, img, discription } = service;
    return (
        <div className='text-justify border-2 rounded-lg p-8 space-y-2 bg-slate-600 text-white'>
            <img className='mx-auto mb-8' src={img} alt="" />
            <h6 className='font-semibold'>{name}</h6>
            <h5>{price}</h5>
            <p>{`${discription.slice(0, 290)}.....................`}</p>
            <button className='p-2 bg-slate-800 mt-8 text-white rounded block mx-auto'>Checkout</button>
        </div>
    );
};

export default Service;