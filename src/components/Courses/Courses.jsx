import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Course Registration</h1>
            <div className=' grid grid-cols-3 '>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course = {course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;