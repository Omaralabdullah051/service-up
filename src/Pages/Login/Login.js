import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, , hookError,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, , googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email for reset password. check your inbox')
        }
        else {
            toast('Provide your email')
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    useEffect(() => {
        const error = hookError || googleError
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
    }, [hookError, googleError]);

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from, googleUser]);

    return (
        <div className='auth-container'>
            <h4 className='text-center font-bold mt-4 text-slate-700'>Please Login</h4>
            <form onSubmit={handleSubmit} className='form-container mt-12'>
                <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                <input ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />
                <p className='text-center mt-4'>Forget password? <button onClick={handleResetPassword} className="text-slate-700 font-bold">Reset password</button></p>
                <p className='text-center mt-4'>New to this site? <Link className='text-slate-700 font-bold' to="/signup">Please Register</Link></p>
                <input className='bg-slate-700 text-white cursor-pointer' type="submit" value="Login" />
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

export default Login;