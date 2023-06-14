import React from 'react'
import Footer from '../../Components/Footer'
import BestEducationCenter from './BestEducationCenter'
import { Carousel } from './Carousel'
import Experts from './Experts'
import Features from './Features'
import FeaturesList from './FeaturesList'
import Statistics from './Statistics'
import Testimonials from './Testimonials'
import UpcomingCourses3 from './UpcomingCourses3'
import UpcomingCourses2 from './UpcomingCourses2'
import UpcomingCourses1 from './UpcomingCourses1'
const Home = () => {
  return (
    <section className="home">
      <Carousel/>
      <Features/>
      <FeaturesList/>
      <UpcomingCourses3/>
      <UpcomingCourses2/>
      <UpcomingCourses1/>
      <BestEducationCenter/>
      <Experts/>
      <Testimonials/>
      <Statistics/>
      <Footer/>
    </section>
  )
}

export default Home