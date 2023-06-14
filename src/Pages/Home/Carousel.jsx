import React from 'react'
import "../../Style/scss/Home/Carousel.css"
import { carousel } from '../../Components/data'
export const Carousel = () => {
  return (
<div id="carousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {
        carousel.map((item) => {
            const {id,active, img, title1, title2, subtitle} = item
        return (
        <div className={`carousel-item ${active}`} key={id}>
        <img src={img} className="d-block w-100" alt={title1}/>
        <div className="carousel-caption d-md-block">
            <h1>{title1} 
            <br />
            {title2}
            </h1>
            <p>{subtitle}</p>
            <div className="buttons">
              <button className='courses_btn'>Our Courses</button>
              <button className='learn_more_btn'>Learn More</button>
            </div>
        </div>
        </div>
        )
        })
    }
  </div>
</div>
  )
}
