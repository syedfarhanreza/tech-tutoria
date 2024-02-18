import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import CourseCart from './components/CourseCart/CourseCart'
import toast, { Toaster } from 'react-hot-toast'


function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = (course, credit, price) => {
    const isCourseSelected = selectedCourses.filter(selectedCourse => selectedCourse.id === course.id).length > 0;


    if (!isCourseSelected) {
      const newSelectedCourses = [...selectedCourses, course];
      setSelectedCourses(newSelectedCourses);

      const newRemainingCredit = remainingCredit - credit;
      if (newRemainingCredit < 0) {
        toast.error("You have exceeded your credit limit.");
        return;
      }
      setRemainingCredit(newRemainingCredit);

      const newTotalCredit = totalCredit + credit;
      if (newTotalCredit <= totalCredit) {
        toast.error("Adding this course would exceed your remaining credit.");
        return;
      }
      setTotalCredit(newTotalCredit);

      const newTotalPrice = totalPrice + price;
      setTotalPrice(newTotalPrice);

    } else {
      toast.error("This course is already selected.");
    }
  };



  return (
    <>
      <Header></Header>
      <h1 className='text-3xl font-bold text-center mb-5'>Course Registration</h1>
      <div className='flex justify-evenly mx-10'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <CourseCart
          selectedCourses={selectedCourses}
          remainingCredit={remainingCredit}
          totalCredit={totalCredit}
          totalPrice={totalPrice}
        ></CourseCart>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </>
  )
}

export default App
