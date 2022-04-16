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
            <h3 className='font-bold text-center text-slate-800'>Landscape photography</h3>
            <div className='grid grid-cols-3 gap-10 p-12'>
                {
                    cameraInfo.map(camera => <Camera camera={camera} key={camera.id} />)
                }
            </div>
        </div >
    );
};

export default Cameras;