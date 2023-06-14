import React from 'react'
import "../Style/scss/Footer.css"
import logo from "../Images/logo.png"
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF,FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='footer'>
        <aside>
            <div className="title">
                <img src={logo} alt="logo" />
                <span>Edus</span> 
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem modi nam porro sed deserunt?
            </div>
            <div className="social">
                <div className="social-item"><AiOutlineTwitter/></div>
                <div className="social-item"><FaFacebookF/></div>
                <div className="social-item"><FaLinkedinIn/></div>
                <div className="social-item"><FaTelegramPlane/></div>
                <div className="social-item"><AiOutlineInstagram/></div>
            </div>
        </aside>
        <aside>
            <div className="title">Latest Courses</div>
            <div className="courses">
                <div className="course">Computer Engineering <span></span></div>
                <div className="course">Social Science <span></span></div>
                <div className="course">Website Development <span></span></div>
                <div className="course">Business Studies <span></span></div>
                <div className="course">Civil Engineering <span></span></div>
                <div className="course">Important of English <span></span></div>
                <div className="course">Civil Engineering <span></span></div>
                <div className="course">General Science <span></span></div>
            </div>
        </aside>
        <aside>
            <div className="title">Newsletter</div>
            <div className="text">Subscribe Our Newsletter to Get More Update and Join Our Course Information</div>
            <div className='input'>
                <input type="email" placeholder='Enter Your Email'/>
                <button><HiOutlineArrowNarrowRight/></button>
            </div>
        </aside>
    </footer>
  )
}

export default Footer