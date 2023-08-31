import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import "../../../Style/scss/Pages/Testimonials.scss"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { testimonials } from '../../../Components/data';
const Testimonials = () => {
    const [count, setCount] = useState(0)
    const {id, img, name, status, text} = testimonials[count];
    const checkNumber = (number) => {
        if(number < 0) {
            return testimonials.length - 1
        }
        if(number > testimonials.length - 1) {
            return 0
        }
        return number
    }
    const prevItem = () => {
        setCount((item) => {
            let newCount = item + 1;
            return checkNumber(newCount)
        })
    }
    const nextItem = () => {
        setCount((item) => {
            let newCount = item + 1;
            return checkNumber(newCount)
        })
    }
  return (
    <div className='testimonial'>
        <header>
            <h1>Our Student Parents</h1>
            <h1>Say About Us</h1>
        </header>
        <main className='testimonial_item'>
            <div className="control_prev"><button onClick={prevItem}><FaAngleLeft/></button></div>
                        <div className="details" key={id}>
                        <p className='text'>{text}</p>
                        <div className="person_stars">
                            <div className="person">
                                <img src={img} alt="" />
                                <div className="data">
                                    <h3 className="name">{name}</h3>
                                    <h6>{status}</h6>
                                </div>
                            </div>
                            <div className="stars">
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                                <span><AiFillStar/></span>
                            </div>
        
                        </div>
                        <hr />
                    </div>
            <div className="control_next"><button onClick={nextItem}><FaAngleRight/></button></div>
        </main>
    </div>
  )
}

export default Testimonials