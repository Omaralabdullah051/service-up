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
        <div className='mt-40'>
            <h3 className='text-center text-slate-800 font-bold'>Additional Services</h3>
            <div className='grid grid-cols-2 gap-20 mt-8 mb-5 px-2'>
                <div className="bg-red-500 text-white font-semibold p-6">
                    {
                        services[1]?.map(service => <p key={services[1].indexOf(service)}><FontAwesomeIcon className='mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
                <div className='bg-slate-700 text-white font-semibold p-6'>
                    {
                        services[2]?.map(service => <p key={services[2].indexOf(service)}><FontAwesomeIcon className='mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
            </div>
            <div className='mx-2 p-6 bg-teal-400 mb-20 font-semibold flex justify-around items-center'>
                <div>
                    {
                        services[0]?.map(service => <p key={services[0].indexOf(service)}><FontAwesomeIcon className='mr-4' icon={faCheck} />{service}</p>)
                    }
                </div>
                <div>
                    <img src={Camera} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AdditionalServices;