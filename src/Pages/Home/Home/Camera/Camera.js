import React from 'react';
import './Camera.css';

const Camera = ({ camera }) => {
    const { img, title, discription } = camera;
    return (
        <div className='camera-container text-justify'>
            <img src={img} alt="" />
            <h4>{title}</h4>
            <p>{discription}</p>
        </div>
    );
};

export default Camera;