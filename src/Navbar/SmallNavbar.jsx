import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineXMark } from "react-icons/hi2";
import { hideSmallNavbar} from '../EduSlice/EduSlice';

const SmallNavbar = () => {
const {navLinks} = useSelector((store) => store.edu)
const dispatch = useDispatch()
  return (
    <div className="small_navbar">
    <div className="small_navbar_container"> 
    <div className="logo"><img src={logo} alt="logo"/></div>
    <ul className="navbar_nav">
    {navLinks.map((link) => {
    const {id,direction,title, dropdown } = link
    return (
      <div className="nav_item" key={id}>
        <li  
        className='nav_link'>
        <Link to={direction} className='link'>{title} </Link>
        </li>
        {
      dropdown ? 
      <div className="dropdown_section">
      {
      dropdown.map((item) => {
      const {id, title, link} = item
      return <div
       onClick={() => dispatch(hideSmallNavbar())}
       className='dropdown_item' 
       key={id}>
        <Link to={link} className='link'>{title} </Link></div>
      })
      }
      </div>
      :
      ""
        } 
      </div>

    )
    })}
    </ul>
    </div>       
    <button className='close_btn' onClick={() => dispatch(hideSmallNavbar())}><HiOutlineXMark/></button>
    </div>
  )
}
export default SmallNavbar