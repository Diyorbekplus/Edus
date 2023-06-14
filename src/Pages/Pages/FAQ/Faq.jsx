import React from 'react'
import "../../../Style/css/FAQ.css"
import Header from '../../../Components/Header'
import Footer from "../../../Components/Footer";
import { FaqQuestion, showFaqQuestion } from '../../../Components/data'
const Faq = () => {
  return (
    <div className='faq'>
        <header>
            <Header title={"FAQ"}/>
        </header>
        <main>
          <aside>        
            <div className="accordion" id="accordionExample">
              {
                FaqQuestion.map((item) => {
                  const {id, title, text, order} = item
                  return (
                    <div className="accordion-item" key={id}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${order}`} aria-expanded="false" aria-controls="collapseTwo">
                        {id}. {title}
                      </button>
                    </h2>
                    <div id={order} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">{text}</div>
                    </div>
                  </div>
                  )
                })
              }
        </div>
        </aside>
        <aside>
        <div className="accordion" id="accordionExample">
          {
            showFaqQuestion.map((item) => {
              const {id, title, text, order} = item
              return (
                <div className="accordion-item" key={id}>
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${order}`} aria-expanded="false" aria-controls="collapseTwo">
                    {id}. {title}
                  </button>
                </h2>
                <div id={order} className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">{text}</div>
                </div>
              </div>
              )
            })
          }
        </div>
        </aside>
        </main>

        <Footer/>

    </div>
  )
}

export default Faq