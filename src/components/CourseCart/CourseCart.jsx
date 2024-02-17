import React from 'react';

const CourseCart = ({ selectedCourses,remainingTime }) => {

   
    return (
        <div className='w-1/4'>
            <h1 className='text-lg text-center font-bold text-blue-400 border-b-2 mb-4'>Credit Hour Remaining {remainingTime} hr</h1>
            <div>
                <h1 className='text-xl font-bold'>Course Name</h1>
                <p>
                    {
                        selectedCourses.map((selectedCourse, idx) => <li className='list-decimal' key={idx}
                        >{selectedCourse.course_title}</li>)
                    }
                </p>
            </div>
        </div>
    );
};

export default CourseCart;