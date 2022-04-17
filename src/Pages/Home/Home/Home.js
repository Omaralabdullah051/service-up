import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import AdditionalServices from './AdditionalServices/AdditionalServices';
import Cameras from './Cameras/Cameras';

const Home = () => {
    return (
        <div>
            <Banner />
            <Cameras />
            <Services />
            <AdditionalServices />
        </div>
    );
};

export default Home;