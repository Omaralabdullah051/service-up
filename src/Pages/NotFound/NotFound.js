import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/images/404.png';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-16 text-center space-y-4'>
            <img className='mx-auto' src={notFound} alt="" />
            <h4 className='font-bold'>Page Not Found</h4>
            <p className='font-semibold'>This page you are looking for might have been removed or name changed or temporarily unavailable</p>
            <button onClick={() => navigate('/')} className='p-3 bg-slate-700 rounded text-white'>Go to Home</button>
        </div>
    );
};

export default NotFound;