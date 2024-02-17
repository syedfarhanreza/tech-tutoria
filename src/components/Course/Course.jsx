import React from 'react';

const Course = ({ course , handleSelectCourse}) => {

    const { course_title, course_description, course_image, price, credit_hour } = course;

    return (
        <div className='w-80 mb-5'>
            <img className='w-80 h-64 mb-4' src={course_image} alt={`Image of ${course_title}`} />
            <h1 className="text-xl font-bold mb-4">{course_title}</h1>
            <p className='mb-4 h-24'>{course_description}</p>
            <div className='flex justify-between text-lg mb-2 mx-4'>
                <p>Price: $ {price}</p>
                <p>Credit: {credit_hour}hr</p>
            </div>
            <button onClick={() => handleSelectCourse(course, course.credit_hour)} className='text-white font-bold bg-blue-500 hover:bg-blue-400 w-full p-3 rounded-xl'>Select</button>
        </div>
    );
};

export default Course;