import React from 'react';
import myself from '../../assets/images/myself.png';

const About = () => {
    return (
        <div>
            <div>
                <img className='mx-auto w-40 md:w-60 xl:w-80 border-x-4 border-slate-700 bg-slate-300' src={myself} alt="" />
            </div>
            <div className='bg-slate-800 mx-2 md:mx-10 lg:mx-30 xl:mx-60 text-white font-semibold p-8 text-justify'>
                <p className='md:text-3xl'>Omar Al Abdullah</p>
                <p className='text-xs md:text-base'>There is no one who has no goal in life. Each and everyone has a goal in his life. I'm Omar. I also have a goal. I want to became a successful web developer . I know that I have to go a long way. The journey is so much difficult but it's possible. It's definitely possible. I have been already learned modern Javascript. And now I am learning React. I already finished some projects. I want to became a MERN Stack developer. I am doing what i need to do. But sometimes it is much more difficult to maintain the ecosystem and time of our life. That's why we are human being. But I still working hard to achieve my goal. If I can work hard like that till the end, I hope I will achieve my goal insha-allah.</p>
            </div>
        </div>
    );
};

export default About;