import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <p className='text-center mt-5'>Loading......</p>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return (
            <div className='text-center mt-10 space-y-4'>
                <h3>Hey!!!Your SignUp process is not completed yet</h3>
                <h4 >You need to verify your email</h4>
                <button><a className='p-2 bg-slate-700 text-white rounded' href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGpFWNbclfgZNTwGKjqGVVwtmxM">Verify your email</a></button>
            </div>
        )
    }

    return children;
};

export default RequireAuth;