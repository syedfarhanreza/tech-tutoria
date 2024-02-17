import React from 'react';

const Course = ({ course }) => {
    const { course_title, course_description, course_image, price, credit_hour } = course;
    return (
        <div className='w-96 mx-3 mb-5'>
            <img className='w-96 h-72 mb-4' src={course_image} alt={`Image of ${course_title}`} />
            <h1 className="text-2xl font-bold mb-4">{course_title}</h1>
            <p className='mb-4'>{course_description}</p>
            <div className='flex justify-between text-lg mb-2 mx-4'>
                <p>Price: $ {price}</p>
                <p>Credit: {credit_hour}hr</p>
            </div>
            <button className='text-white bg-blue-500 w-full p-3 rounded-xl'>Select</button>
        </div>
    );
};

export default Course;