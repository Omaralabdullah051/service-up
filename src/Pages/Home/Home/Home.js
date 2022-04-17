import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Cameras from './Cameras/Cameras';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cameras />
            <Services />
        </div>
    );
};

export default Home;