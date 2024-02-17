import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import CourseCart from './components/CourseCart/CourseCart'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingTime, setRemainingTime] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = (course, time, price) => {
    const newSelectedCourses = [...selectedCourses, course];
    setSelectedCourses(newSelectedCourses);

    const newTotalCredit = totalCredit + time;
    setTotalCredit(newTotalCredit);

    const newRemainingTime = remainingTime - time;
    setRemainingTime(newRemainingTime);

    const newTotalPrice = totalPrice + price;
    setTotalPrice(newTotalPrice);
  };


  return (
    <>
      <Header></Header>
      <h1 className='text-3xl font-bold text-center mb-5'>Course Registration</h1>
      <div className='flex justify-evenly mx-10'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <CourseCart
          selectedCourses={selectedCourses}
          remainingTime={remainingTime}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></CourseCart>
      </div>
    </>
  )
}

export default App
