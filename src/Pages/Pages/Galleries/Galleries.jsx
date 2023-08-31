import React from 'react'
import "../../../Style/scss/Pages/Gallery.scss"
import Header from '../../../Components/Header'
import { galleries } from '../../../Components/data'
import Footer from '../../../Components/Footer'

const Galleries = () => {
  return (
    <div className='gallery'>
        <header>
            <Header title={"Galleries"}/>
        </header>
        <main>
          <header>
            <div>All</div>
            <div>Book</div>
            <div>ClassRoom</div>
            <div>Event</div>
            <div>Teacher</div>
            <div>Video</div>
          </header>

          <div className="list">
            {
              galleries.map((item) => {
                const {id, img} = item
                return(
                  <article key={id} className="card">
                    <img src={img} alt="" className='card-img-top'/>
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

export default Galleries