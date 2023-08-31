import React from 'react'
import { Link } from 'react-router-dom'
import "../../../Style/scss//Pages/WhyLearn.scss"
import img from "../../../Images/whyLearn.jpg"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const WhyLearn = () => {
  return (
    <div className='whyLearn'>
        <aside>
            <div className="img_box">
                <img src={img} alt="why-learn" />
            </div>
        </aside>
        <aside>
            <h1>Why You Learn Education</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accustium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illintore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <ul>
                <li>Used The Web For A Day On Internet Explorer</li>
                <li>A Detailed Comparison Between WordPress And October</li>
                <li>Block Slack’s Contribution To Building A Better Collae</li>
            </ul>

            <button className='show_courses_btn'><Link className='link'>Our Courses <HiOutlineArrowNarrowRight/></Link> </button>
        </aside>
    </div>
  )
}

export default WhyLearn