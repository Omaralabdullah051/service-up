import React from 'react';
import Camera from '../../../assets/images/camera-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 mt-80">
            <div className='md:flex justify-around items-center text-center md:text-justify'>
                <div>
                    <img className='mx-auto w-3/6 md:mx-0 md:w-full' src={Camera} alt="" />
                </div>
                <div className='text-white space-y-3'>
                    <h6>Contact Info</h6>
                    <p><FontAwesomeIcon className='mr-3' icon={faPhone} />+1 (212)-695-3818</p>
                    <p><FontAwesomeIcon className='mr-3' icon={faEnvelope} />info@serviceup.com</p>
                    <p><FontAwesomeIcon className='mr-3' icon={faLocationDot} />463 7th Ave, NY 10018, BD</p>
                </div>
            </div>
            <p className='text-white text-center p-10'><small><FontAwesomeIcon className='mr-1' icon={faCopyright} />{year}. All Right Reserved</small></p>
        </footer>
    );
};

export default Footer;