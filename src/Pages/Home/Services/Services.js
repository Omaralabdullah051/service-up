import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h4 className='font-bold text-slate-800 text-center mt-8 md:mt-20 md:text-4xl'>Our Services</h4>
            <div className='lg:grid grid-cols-3 lg:gap-2 xl:gap-6 p-3 xl:p-8'>
                {
                    services.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;