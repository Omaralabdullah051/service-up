import React from 'react';

const Question1 = () => {
    return (
        <div className='text-center font-semibold'>
            <h6 className='text-cyan-900 md:text-3xl xl:text-4xl'>What's the difference between Authentication and Authorization?</h6>
            <p className='text-justify mt-5 text-xs md:text-base xl:text-xl'>Authentication is the process of identifying user's indentity via the available credentials to verify the identity. Authorization is the process of granting someone to access the system. In Authentication, the user and server are verified wheare as in authorization, it is verified if the the user is allowed to access through defined rules. Authentication process is perfored before authorization whereas the authorization process is almost done once the user is successfully authenticated. Login detials,name and password of the user are required in authentication process whereas user's privilage or security level is required in authorization process. Data is available through the Token Ids in authentication process whereas the data is provide via access tokens in authorization process. User can partially changed the authentication credentials but user cannot changed the authorization permissions. Beacause the authorization permissions are given to the user by the manager of the system. </p>
        </div>
    );
};

export default Question1;