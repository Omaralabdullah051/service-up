import React from 'react';

const Question2 = () => {
    return (
        <div className='text-center font-semibold'>
            <h6 className='text-cyan-900  md:text-3xl xl:text-4xl'>Why are we using firebase? What other options do we have to implement authentication?</h6>
            <p className='text-justify mt-5 text-xs md:text-base xl:text-xl'>Now a days, user authentication system is the most important requirements for Android apps to identify the users. It is so much important to authenticate the user properly. But it is much harder and harder if we write all the codes one by one in our application to implement authentication process. Without the help of other library, there are some user and developer experience issues. Security issues is one of the major fact in this modern application. So it becomes much more easier and secure when we use any library to implement authentication system. Firebase is the one of them.  It offers a better user experience and also developer experience as well. By using firebase, we are able to authenticate our users securely and protect their private data. We can easily implement Google, Facebook, Twitter, Github, etch authentication system. There are other options to implement authentication system. As like as Okta, Auth0, Frontegg,  oneLogin, Keycloak, FusionAuth, LoginRadius,etc.</p>
        </div>
    );
};

export default Question2;