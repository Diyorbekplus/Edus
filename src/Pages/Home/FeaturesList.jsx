import React from 'react'
import "../../Style/scss/Home/FeaturesList.scss"
import { features } from '../../Components/data'
import { BsArrowRight } from "react-icons/bs";
const FeaturesList = () => {
  return (
    <div className='features_list'>
                  {
            features.map((item) => {
              const {id, img, title, text, color} = item
              return (
                <article key={id} style={{backgroundColor: color}}>
                  <div className='icon'>{img}</div>
                  <h1>{title}</h1>
                  <p>{text}</p>
                  <div className="read_more">
                  <a href="/">Read More <span className='arrow_right'><BsArrowRight className='icon_right'/></span> <span className='line'></span></a>
                  </div>
                </article>
              )

            })
          }
    </div>
  )
}

export default FeaturesList