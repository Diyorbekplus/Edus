import React, { useState } from 'react'
import "../../Style/scss/Home/UpcomingCourses.scss"
import { useSelector } from 'react-redux';
import { FiUser, FiClock,FiBook } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpcomingCourses1 = () => {
  const {upcomingCourses} = useSelector((store) => store.edu);
  const [index, setIndex] = useState(0)
  const {id, img, title, type, studentsAmount, startDate, lessonsAmount} = upcomingCourses[index];

  const nextElement = () => {
    setIndex((index) => {
        let newIndex = index + 1;
        if(newIndex > upcomingCourses.length - 1) {
            return newIndex = upcomingCourses.length - 1
        }
        return newIndex
    })
  }
  const prevElement = () => {
    setIndex((index) => {
        let newIndex = index - 1;
        if( newIndex < 0) {
            return newIndex = 0
        }
        return newIndex
    })
  }
  return (
    <div className='upcoming_courses_small'>
      <header>
        <h1>Our Upcoming<br/>
        Courses
        </h1>
        <div className="control_buttons">
          <button onClick={prevElement}><FaArrowLeft/></button>
          <button onClick={nextElement}><FaArrowRight/></button>
        </div>
      </header>
      <main className='upcomingCourses_list_small'>
              <article className='card' key={id}>
                <div className="img_box ">
                  <img className='card-img-top' src={img} alt={title} />
                </div>
                <div className="card-body">
                  <h1 className="title">{title}</h1>
                  <p className="lecturer">Lecturer <span className='admin'>admin</span> in <span className='type'>{type}</span> </p>
                  <hr />

                  <div className="details">
                    <div className="studentsAmount"><span><FiUser/></span> {studentsAmount}</div>
                    <div className="startDate"><span><FiClock/></span>{startDate}</div>
                    <div className="lessonsAmount"><span><FiBook/></span>{lessonsAmount} Lessons</div>
                  </div>
                </div>
              </article>
      </main>
    </div>
  )
}

export default UpcomingCourses1