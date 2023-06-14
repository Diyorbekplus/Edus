import React from 'react'
import "../Style/scss/Header.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import bg from "../Images/headerBack.jpg"
const Header = ({title}) => {
  return (
    <div className='header'>
        <img className='bg' src={bg} alt="header_background" />
        <aside className='title'>{title}</aside>
        <aside className='page'>Home <HiOutlineArrowNarrowRight/> <span>{title}</span></aside>
    </div>
  )
}

export default Header