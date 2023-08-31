import React from 'react'
import "../../Style/scss/Shop/Shop.scss"
import { shopProducts } from '../../Components/data'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Shop = () => {
  return (
    <div className='shop'>
      <header>
        <Header title={"Shop"}/>
      </header>
      <main>
        {
          shopProducts.map((item) => {
            const {id, title,img, price} =item;
            return (
              <article className='card' key={id}>
                <img src={img} alt={title} className="card-img-top"/>
                <div className="card-body">
                  <h1 className="card-title">{title}</h1>
                  <p className="price">${price}</p>
                </div>
              </article>
            )
          })
        }
      </main>
      <Footer/>
    </div>
  )
}

export default Shop