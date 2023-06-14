import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import "../../Style/scss/Home/Education.css";

const BestEducationCenter = () => {
  return (
    <div className='best_education_center'>
      <div className="inner">
      <p className="subtitle">BEST EDUCATION UNIVERSITY</p>
      <h1>Education Is The Backbone Of a Nation Expansion Of Idea</h1>
      <div className="buttons">
        <button>Join Us <span><BsArrowRight/></span></button>
        <button>Read More <span><BsArrowRight/></span></button>
      </div>
      </div>
    </div>
  )
}

export default BestEducationCenter