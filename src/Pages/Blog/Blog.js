import React from 'react';
import Question1 from './Questions/Question1';
import Question2 from './Questions/Question2';
import Question3 from './Questions/Question3';

const Blog = () => {
    return (
        <div className='mt-8 md:mt-16 px-8 space-y-20'>
            <Question1 />
            <Question2 />
            <Question3 />
        </div>
    );
};

export default Blog;