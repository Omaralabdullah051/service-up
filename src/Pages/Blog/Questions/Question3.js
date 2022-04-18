import React from 'react';

const Question3 = () => {
    return (
        <div className='text-center font-semibold'>
            <h6 className='text-cyan-900  md:text-3xl xl:text-4xl'>What other services does firebase provide other than authentication?</h6>
            <p className='text-justify mt-5 text-xs md:text-base xl:text-xl'>Firebase is a library that helps developers to build, manage and grow their application easily. It is very much easier to use and implement authentication. In the large application,we need to think about our own bussiness logics. It is much more harder when we implement our own authentication system in our application. It is so much costly and timing issues. So we can use firebase so that we can only concentrate on our own bussiness logics. But authentication is not the only service that firebase provide. There are many services that are provided by the firebase instead of authentication. Such as Realtime Database, Cloud Firestore, Remote Config, Hosting, Cloude Messaging, Performance Monitoring, Crashlytics, Google Analytics, Dynamic Links, Test Lab, A/B tesTing , App Destribution, Notifications, ect.</p>
        </div>
    );
};

export default Question3;