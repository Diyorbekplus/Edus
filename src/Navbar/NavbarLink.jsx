import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const NavbarLink = ({id,direction,title, dropdown }) => {
  return (
    <li className='nav_item' 
    key={id}>
    <Link className='nav_link' to={direction}>
    {title}
    {
      dropdown ? 
      <MdOutlineKeyboardArrowDown/> 
      : 
      ""
    }
    </Link >
    {
      dropdown ? 
      <ul className="dropdown_section">
      {
        dropdown.map((item) => {
          const {id, title, link} = item
            return <li  key={id}><Link className='link' to={link}>{title}</Link></li>
        })
      }
    </ul>
    : 
    ""
    }
    </li>
  )
}
export default NavbarLink