import React, { useEffect, useState } from 'react';
import Camera from '../Camera/Camera';

const Cameras = () => {
    const [cameraInfo, setCameraInfo] = useState([]);

    useEffect(() => {
        fetch('camera.json')
            .then(res => res.json())
            .then(data => setCameraInfo(data))
    }, []);

    return (
        <div className='mt-20'>
            <h4 className='font-bold text-center text-slate-800 md:text-4xl'>Landscape photography</h4>
            <div className='lg:grid grid-cols-3 lg:gap-4 xl:gap-10 p-3 lg:p-4 xl:p-12'>
                {
                    cameraInfo.map(camera => <Camera camera={camera} key={camera.id} />)
                }
            </div>
        </div >
    );
};

export default Cameras;