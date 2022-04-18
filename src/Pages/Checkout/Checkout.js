import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h6 className='text-center mt-10 font-bold md:text-3xl xl:text-4xl mx-2'>{user?.displayName ? `Hey ${user?.displayName}! Please stay with us for latest update` : 'Hey Mr.X! Please stay with us for latest update'}</h6>
        </div>
    );
};

export default Checkout;