import React from 'react'
import "../../Style/scss/Courses/Courses.css"
import { courses } from '../../Components/data'
import { AiFillStar } from "react-icons/ai";
import Header from "../../Components/Header"
import Footer from '../../Components/Footer';
const Courses = () => {
  return (
    <div className='courses'>
      <header>
        <Header title={"Courses"}/>
      </header>
      <main>
        <header>
          <ul>
            <li>All</li>
            <li>Technology</li>
            <li>Business</li>
            <li>Language</li>
            <li>Science</li>
          </ul>
        </header>

        <div className="courses_list">
          {
            courses.map((item) => {
              const {id, img, title, price,type,text } = item;
              return (
                <article key={id} className="card ">
                  <img src={img} alt={title} className="card-img-top"/>
                  <div className="card-body">
                    <div className="details">
                      <p className="price">${price}</p>
                      <p className='stars'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                      </p>
                    </div>
                  <h2 className='card-title'>{title}</h2>
                  <h6>Lecture<span className="admin"> admin</span> in <span className='type'>{type}</span></h6>
                  <p className="text">
                    {text}
                  </p>
                  <button className='learn_more_btn'>Learn More</button>
                  </div>
                </article>
              )
            })
          }
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Courses