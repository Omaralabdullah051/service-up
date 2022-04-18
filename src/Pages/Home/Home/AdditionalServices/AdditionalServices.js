import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Camera from '../../../../assets/images/camera-1.png';

const AdditionalServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('additional-services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-20 md:mt-40'>
            <h4 className='text-center text-slate-800 font-bold md:text-4xl'>Additional Services</h4>
            <div className='md:grid grid-cols-2 gap-20 mt-8 mb-5 px-4'>
                <div className="bg-red-500 text-white font-semibold p-6">
                    {
                        services[1]?.map(service => <p key={services[1].indexOf(service)}><FontAwesomeIcon className='mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
                <div className='bg-slate-700 text-white font-semibold p-4'>
                    {
                        services[2]?.map(service => <p key={services[2].indexOf(service)}><FontAwesomeIcon className='mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
            </div>
            <div className='mx-4 p-3 bg-teal-400 mb-20 font-semibold md:flex justify-around items-center'>
                <div className='mt-4 md:mt-0'>
                    {
                        services[0]?.map(service => <p className='text-sm md:text-base' key={services[0].indexOf(service)}><FontAwesomeIcon className='mr-1 md:mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
                <div>
                    <img className='w-9/12 mx-auto md:w-full' src={Camera} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;