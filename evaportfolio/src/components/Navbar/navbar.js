import React from 'react'
import './navbar.css'
import Elogo from '../../assets/Elogo.png'
import contactIMG from '../../assets/contact.png'
import {Link} from 'react-scroll' 



const Navbar = () => {
  return (
    <nav className="navbar">
        <img src= {Elogo} alt="Logo" className='logo'/>
        <div className='desktopMenu'> 
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About Me</Link>
            <Link className='desktopMenuListItem'>Skills</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactIMG} alt="" className='desktopMenuImg' />Let's Connect
        </button>
    </nav>
  )
}

export default Navbar