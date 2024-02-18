import React from 'react';

const CourseCart = ({ selectedCourses, totalCredit, remainingCredit , totalPrice}) => {

    

    return (
        <div className='w-1/4'>
            <h1 className='text-lg text-center font-bold text-blue-400 border-b-2 mb-4'>Credit Hour Remaining {remainingCredit} hr</h1>
            <div className='h-auto border-b-2'>
                <h1 className='text-xl font-bold'>Course Name</h1>
                <p className='mb-5'>
                    {
                        selectedCourses.map((selectedCourse) => <li className='list-decimal' key={selectedCourse.id}
                        >{selectedCourse.course_title}</li>)
                    }
                </p>
            </div>
            <div>
                <h1 className='text-lg mb-4 border-b-2'>Total Credit Hour : {totalCredit}</h1>
                <h1 className='text-lg mb-4'>Total Price : {totalPrice} USD</h1>
            </div>
        </div>
    );
};

export default CourseCart;