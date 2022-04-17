import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-center mt-10 font-bold'>{user?.displayName ? `Hey ${user?.displayName}! Please fill up this form` : 'Hey Mr.X! Please fill up this form'}</h2>
        </div>
    );
};

export default Checkout;