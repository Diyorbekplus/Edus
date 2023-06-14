import React from 'react'
import Header from '../../../Components/Header'
import Footer from "../../../Components/Footer"
import { FiUser } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrEdit } from "react-icons/gr";
import "../../../Style/scss/Pages/Contact.css"
import { connection } from '../../../Components/data';
const Contact = () => {
  return (
    <div className='contact'>
        <header>
            <Header title={"Contact Us"}/>
        </header>
        <main>
          <form action="" className='form'>
  <div className="input-group mb-3">
<input type="text" className="form-control" placeholder="Name"/>
<span className="input-group-text" id="basic-addon1"><FiUser/></span>
</div>
<div className="input-group mb-3">
<input type="email" className="form-control" placeholder="Email"/>
<span className="input-group-text" id="basic-addon1"><GoMail/></span>
</div>
<div className="input-group">
  <textarea className="form-control"></textarea>
  <span className="input-group-text"><GrEdit/></span>
</div>
<p>* I agree that my submitted data is being collected and stored. For further details on handling user data, see our Privacy Policy.</p>

<button type='submit' className='btn'>Send Message</button>
          </form>

          <div className="connection">
            {
              connection.map((item) => {
                const {id, icon, data} = item
                return (
                  <article key={id}>
                    <div className="icon">{icon}</div>
                    <div className='data'>
                      {
                        data.map((item, index) => {
                          return (
                            <p key={index}>{item}</p>
                          )
                        })
                      }

                    </div>
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

export default Contact