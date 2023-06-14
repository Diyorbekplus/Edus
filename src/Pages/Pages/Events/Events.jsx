import React from 'react'
import "../../../Style/css/Events.css"
import { events } from '../../../Components/data'
import Header from '../../../Components/Header'

const Events = () => {
  return (
    <div className='events'>
        <header>
            <Header title={"Events"}/>
        </header>

{/*         <main className='events_list'>
          {
            events.map((item) => {
              return (
                <article>
                  <img src={item.img} alt="" />
                </article>
              )
            })
          }
        </main> */}
    </div>
  )
}

export default Events