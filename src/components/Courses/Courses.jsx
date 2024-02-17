import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelectCourse}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className='w-3/4 grid grid-cols-3 gap-5 place-content-center mr-2'>
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleSelectCourse = {handleSelectCourse}
                ></Course>)
            }
        </div>
    );
};

export default Courses;