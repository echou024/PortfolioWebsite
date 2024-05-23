import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/downloadicon.png'
import {Link} from 'react-scroll' 

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className="introName">Eva</span> <br />Computer Science Student</span>
            <p className='introPara'>I am Computer Science student passionate about utilizing advanced <br/>technologies to uncover insights and create impactful digital solutions.</p>
            <a href="EvaChoudharyResume.pdf" target="_blank" download="EvaChoudharyResume.pdf" rel="noreferrer" className="Resume">
                <button className='btn'>
                    <img src={btnImg} alt='Download Icon' className='downloadImg'/>
                    Resume
                </button>
            </a>

        </div>
        <img src={bg} alt='Headshot' className='bg' />
    </section>
  )
}

export default Intro