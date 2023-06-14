import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from "../Images/logo.png"
import "../Style/scss/Navbar.css"
import { MdOutlineSearch, MdOutlineShoppingCart } from "react-icons/md";
import { HiBars3} from "react-icons/hi2";
import { showSmallNavbar} from '../EduSlice/EduSlice';
import NavbarLink from './NavbarLink'
import SmallNavbar from './SmallNavbar'
const Navbar = () => {
    const dispatch = useDispatch()
 const {navLinks, isSmallNavbarOpen } = useSelector((store) => store.edu)
  return (
    <nav>
        <div className="navbar_container">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>Edus</span>
        </div>
        <button className='navbar_toggler' 
        onClick={() => dispatch(showSmallNavbar())}>
        <HiBars3/>
        </button>
        <ul className="desktop_navbar_nav">
            {
                navLinks.map((link) => {
                    return (
                        <NavbarLink key={link.id} {...link}/>
                    )
                })
            }
                <div className="search_cart">
                <div className="search"><span><MdOutlineSearch/></span></div>
                <div className="cart"><span><MdOutlineShoppingCart/></span></div>
                <div className="login_register">Login/Register</div>
                </div>
        </ul>
        { isSmallNavbarOpen ? <SmallNavbar/> : "" }
        </div>
    </nav>
  )
}

export default Navbar