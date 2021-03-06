import React, { useEffect, useState } from 'react';
import './Login.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ userInfo, setUserInfo }) => {
    const [createUserWithEmailAndPassword, user, , hookError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, , googleError] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
    });

    const handleName = e => {
        setUserInfo({ ...userInfo, name: e.target.value });
    }

    const handleEmail = e => {
        const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, emailError: '' });
        }
        else {
            setErrors({ ...errors, emailError: 'Please provide a valid email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    };

    const handlePassword = e => {
        const strongPassword = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(e.target.value);
        if (strongPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: '' });
        }
        else {
            setErrors({ ...errors, passwordError: 'Your Password should contain one digit,lower case,upper case and min 8 characters.' });
            setUserInfo({ ...userInfo, password: '' });
        }
    };

    const handleConfirmPassword = e => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, confirmPasswordError: "" });
        }
        else {
            setErrors({ ...errors, confirmPasswordError: "Your two password doesn't matched" });
            setUserInfo({ ...userInfo, confirmPassword: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            toast('Your two passwords does not matched');
        }
        else {
            await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            await updateProfile({ displayName: userInfo.name });
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (userInfo.password === userInfo.confirmPassword) {
            if (user) {
                navigate('/');
            }
        }
        if (googleUser) {
            navigate('/');
        }
    }, [user, navigate, googleUser, userInfo]);

    useEffect(() => {
        const error = hookError || googleError
        if (error) {
            toast(error?.message);
        }
    }, [hookError, googleError]);

    return (
        <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Register</h4>
            <form onSubmit={handleSubmit} className='form-container mt-12'>
                <input onChange={handleName} type="text" name="name" id="name" placeholder='Your name' />
                <input onChange={handleEmail} type="email" name="email" id="email" placeholder='Your Email' required />
                {errors?.emailError && <p className='text-center text-red-700'>{errors?.emailError}</p>}
                <input onChange={handlePassword} type="password" name="password" id="password" placeholder='Password' required />
                {errors?.passwordError && <p className='text-center text-red-700'>{errors?.passwordError}</p>}
                <input onChange={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" placeholder='Confirm password' required />
                {errors?.confirmPasswordError && <p className='text-center text-red-700'>{errors?.confirmPasswordError}</p>}
                <p className='text-center mt-4'>Already have an account? <Link className='text-slate-700 font-bold' to="/login">Please Login</Link></p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Register" />
            </form>
            <div className='flex justify-centers items-center pl-[23px] md:pl-[55px] mt-4'>
                <div className='w-28 md:w-44 h-1 bg-slate-700'></div>
                <div className='mx-1 md:mx-2'>Or</div>
                <div className='w-28 md:w-44 h-1 bg-slate-700'></div>
            </div>
            <button onClick={handleGoogleSignIn} className='p-3 bg-slate-700 text-white w-[250px] md:w-[400px] block mx-auto mt-4 mb-8 font-semibold'>Google Sign In</button>
            <ToastContainer />
        </div>
    );
};

export default Register;