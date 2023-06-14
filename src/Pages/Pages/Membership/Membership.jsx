import React from 'react'
import "../../../Style/scss/Pages/Membership.css"
import { membershipPlans } from '../../../Components/data'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'

const Membership = () => {
  return (
    <div className='membership'>
        <header>
            <Header title={"Membership"}/>
        </header>
        <main className='plans'>
          {
            membershipPlans.map((item) => {
              const {id,icon, title, price, tips} = item;
              return (
                <article key={id}>
                  <div className="icon">{icon}</div>
                  <h1>{title}</h1>
                  <h4>${price}</h4>
                  <div className="line"></div>
                  <ul>
                  {
                    tips.map((tip, index) => {
                      return(
                        <li key={index}>{tip}</li>
                      )
                    })
                  }
                  </ul>
                  <button>Choose Plan</button>
                </article>
              )
            })
          }
        </main>

        <Footer/>
    </div>
  )
}

export default Membership