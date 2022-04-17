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
            <h2 className='font-bold text-slate-800 text-center mt-20'>Our Services</h2>
            <div className='grid grid-cols-3 gap-6 p-8'>
                {
                    services.map(service => <Service service={service} key={service.id} />)
                }
            </div>
        </div>
    );
};

export default Services;