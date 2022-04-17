import React from 'react';
import './Login.css';

const Register = () => {


    return (
        <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Register</h4>
            <form className='form-container mt-12'>
                <input type="text" name="name" id="name" placeholder='Your name' />
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' />
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Register" />
            </form>
            <div className='flex justify-centers items-center pl-[55px]'>
                <div className='w-44 h-1 bg-slate-700'></div>
                <div className='mx-2'>Or</div>
                <div className='w-44 h-1 bg-slate-700'></div>
            </div>
            <button className='p-2 bg-slate-700 text-white w-[400px] block mx-auto mt-4 mb-8 font-semibold'>Google Sign In</button>
        </div>
    );
};

export default Register;