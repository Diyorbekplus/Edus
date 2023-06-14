import React, {useState} from 'react';
import "../../Style/scss/Home/Testimonial.css";
import { HiArrowNarrowLeft,HiArrowNarrowRight } from "react-icons/hi";
import { useSelector } from 'react-redux';
const Testimonials = () => {
  const {testimonials} = useSelector((store) => store.edu)
  /* Large */
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  const testimonialsList = testimonials.slice( firstIndex, lastIndex);
  const nextElement = () => {
    setFirstIndex((firstIndex) => {
      let newIndex = firstIndex + 1;
      if(newIndex > 2) {
        return newIndex = firstIndex
      }
      return newIndex
    })
    setLastIndex((lastIndex) => {
      let newIndex = lastIndex + 1;
      if(newIndex > testimonials.length) {
        return newIndex = testimonials.length
      }
      return newIndex
    })
  }
  const prevElement = () => {
    setFirstIndex((firstIndex) => {
      let newIndex = firstIndex - 1;
      if(newIndex < 0) {
        return newIndex = 0
      }
      return newIndex
    })
    setLastIndex((lastIndex) => {
      let newIndex = lastIndex - 1;
      if(newIndex < 3) {
        return newIndex = 3
      }
      return newIndex
    })
  }
    /* Middle */
    const [firstIndexMiddle, setFirstIndexMiddle] = useState(0);
    const [lastIndexMiddle, setLastIndexMiddle] = useState(2);
    const testimonialsListMiddle = testimonials.slice( firstIndexMiddle, lastIndexMiddle);
    const nextElementMiddle = () => {
      setFirstIndexMiddle((firstIndex) => {
        let newIndex = firstIndex + 1;
        if(newIndex > 3) {
          return newIndex = firstIndex
        }
        return newIndex
      })
      setLastIndexMiddle((lastIndex) => {
        let newIndex = lastIndex + 1;
        if(newIndex > testimonials.length) {
          return newIndex = testimonials.length
        }
        return newIndex
      })
    }
    const prevElementMiddle = () => {
      setFirstIndexMiddle((firstIndex) => {
        let newIndex = firstIndex - 1;
        if(newIndex < 0) {
          return newIndex = 0
        }
        return newIndex
      })
      setLastIndexMiddle((lastIndex) => {
        let newIndex = lastIndex - 1;
        if(newIndex < 2) {
          return newIndex = 2
        }
        return newIndex
      })
    }

    /* Small */
    const [index, setIndex] = useState(0)
    const {id, text, img, name, status} = testimonials[index];
    const nextElementSmall = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if(newIndex > testimonials.length - 1) {
                return newIndex = testimonials.length - 1
            }
            return newIndex
        })
      }
      const prevElementSmall = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if( newIndex < 0) {
                return newIndex = 0
            }
            return newIndex
        })
      }
  return (
    <div className='testimonials'>
      <header>
        <h1>What Our Client’s <br /> 
        Say About Us</h1>
      </header>
      <main className='large'>
        {
          testimonialsList.map((item) => {
            const {id, text, img, name, status} = item;
            return (
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
            )
          })
        }
          <div className="control_bottons">
          <button className='left' onClick={prevElement}><HiArrowNarrowLeft/></button>
          <button className='right' onClick={nextElement}><HiArrowNarrowRight/></button>
        </div>
      </main>
      <main className='middle'>
        {
          testimonialsListMiddle.map((item) => {
            const {id, text, img, name, status} = item;
            return (
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
            )
          })
        }
          <div className="control_bottons">
          <button className='left' onClick={prevElementMiddle}><HiArrowNarrowLeft/></button>
          <button className='right' onClick={nextElementMiddle}><HiArrowNarrowRight/></button>
        </div>
      </main>
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
          <button className='left' onClick={prevElementSmall}><HiArrowNarrowLeft/></button>
          <button className='right' onClick={nextElementSmall}><HiArrowNarrowRight/></button>
        </div>
      </main>
    </div>
  )
}

export default Testimonials