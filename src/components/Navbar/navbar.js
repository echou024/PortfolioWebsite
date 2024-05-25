import React, { useState }from 'react'
import './navbar.css'
import Elogo from '../../assets/Elogo.png'
import contactIMG from '../../assets/contact.png'
import {Link, animateScroll as scroll } from 'react-scroll' 
import menu from '../../assets/menu.png'



const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false);
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <nav className="navbar">
        <button onClick={scrollToTop} className="logoBtn">
          <img src={Elogo} alt="Logo" className='logo'/>
        </button>
       
        <div className='desktopMenu'> 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
            <Link activeClass='active' to='Info' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About Me</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactIMG} alt="contact icon" className='desktopMenuImg' />Let's Connect
        </button>

        <img src= {menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}> 
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='Info' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About Me</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar