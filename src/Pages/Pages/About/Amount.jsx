import React from 'react'
import "../../../Style/scss/Pages/Amount.scss"
import { MdGroups } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn,FaInstagram } from "react-icons/fa";

import { advisors } from '../../../Components/data';
const Amount = () => {
  return (
    <div className='amount'>
        <header>
        <div className="statistic">
          <div className="icon"><span><MdGroups/></span></div>
          <div className="amount">783+</div>
          <div className="title">Parents Reviews</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><BsStars/></span></div>
          <div className="amount">35K+</div>
          <div className="title">Good Students</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><GrAchievement/></span></div>
          <div className="amount">486+</div>
          <div className="title">Program Awards</div>
        </div>
        <div className="statistic">
          <div className="icon"><span><FaLaptopCode/></span></div>
          <div className="amount">984+</div>
          <div className="title">Digital Laboratory</div>
        </div>
        </header>
        <main className='advisors'>
            <div className="header">
                <h1>Meet Our <br /> 
                Expert Advisors</h1>
                <button>View More</button>
            </div>
            <div className="advisors_list">
                {
                    advisors.map((item) => {
                        const {id,img, name} = item
                        return (
                            <article className='advisor card' key={id}>
                                <img className='card-img-top' src={img} alt={name} />
                                <div className="card-body bg-light">
                                <h1 className='card-title'>{name}</h1>
                                <div className="social">
                                    <a href="!#"><span><AiOutlineTwitter/></span></a>
                                    <a href="!#"><span><FaFacebookF/></span></a>
                                    <a href="!#"><span><FaLinkedinIn/></span></a>
                                    <a href="!#"><span><FaInstagram/></span></a>
                                </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </main>
    </div>
  )
}

export default Amount