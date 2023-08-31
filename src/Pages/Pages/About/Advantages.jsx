import React from 'react'
import "../../../Style/scss/Pages/Advantages.scss"
import { advantages } from '../../../Components/data'

const Advantages = () => {
  return (
    <div className='advantages'>
        {
            advantages.map((item) => {
                const {id, icon, title, text} = item;
                return (
                    <article key={id}>
                        <div className="icon">{icon}</div>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Advantages