import React, {useState} from 'react'
import "../../Style/css/Testimonial.css"
import { useSelector } from 'react-redux';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SmallTestimonials = () => {
    const {testimonials} = useSelector((store) => store.edu);
    const [index, setIndex] = useState(0)
    const {id, text, img, name, status} = testimonials[index];
    const nextElement = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if(newIndex > testimonials.length - 1) {
                return newIndex = testimonials.length - 1
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
    <div className='small_testimonials'>
      <header>
        <h1>What Our Client’s <br /> 
        Say About Us</h1>
      </header>
      <main className='small'>
              <article key={id}>
                <p className='text'>
                {text}
                </p>
                <div className="person">
                  <img src={img} alt={name} />
                  <div className="details">
                    <h6>{name}</h6>
                    <p>{status}</p>
                  </div>
                </div>
              </article>
          <div className="control_bottons">
          <button className='left' onClick={prevElement}><FaArrowLeft/></button>
          <button className='right' onClick={nextElement}><FaArrowRight/></button>
        </div>
      </main>
    </div>
  )
}

export default SmallTestimonials