import React from 'react'
import Header from '../../../Components/Header'
import Advantages from './Advantages'
import Amount from './Amount'
import Testimonials from './Testimonials'
import Video from './Video'
import WhyLearn from './WhyLearn'
import Footer from '../../../Components/Footer'
const About = () => {
  return (
    <div>
        <header>
            <Header title={"About Us"}/>
            <WhyLearn/>
            <Advantages/>
            <Amount/>
            <Video/>
            <Testimonials/>
            <Footer/>
        </header>
    </div>
  )
}

export default About