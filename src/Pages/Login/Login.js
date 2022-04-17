import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    useEffect(() => {
        const error = hookError
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/user-not-found":
                    toast("User not found");
                    break;

                case "auth/wrong-password":
                    toast("Wrong password");
                    break;

                default:
                    toast(error?.message);
            }
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Login</h4>
            <form onSubmit={handleSubmit} className='form-container mt-12'>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />
                <p className='text-center mt-4'>New to this site? <Link className='text-slate-700 font-bold' to="/signup">Please Register</Link></p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Login" />
            </form>
            <div className='flex justify-centers items-center pl-[55px] mt-4'>
                <div className='w-44 h-1 bg-slate-700'></div>
                <div className='mx-2'>Or</div>
                <div className='w-44 h-1 bg-slate-700'></div>
            </div>
            <button className='p-3 bg-slate-700 text-white w-[400px] block mx-auto mt-4 mb-8 font-semibold'>Google Sign In</button>
            <ToastContainer />
        </div>
    );
};

export default Login;