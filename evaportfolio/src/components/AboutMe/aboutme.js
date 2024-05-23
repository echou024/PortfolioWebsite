import React from 'react'
import './aboutme.css'
import data from '../../assets/data.png'
import ml from '../../assets/ml.png'
import webdev from '../../assets/webdev.png'

const Aboutme = () => {
  return (
    <section id='Info'>
        <span className='InfoTitle'>About Me</span>
        <span className='Desc'>My name is Eva Choudhary and I am from Manhattan Beach, California. I am currently a junior at the University of California, Riverside studying Computer Science and Business. <br/> I am proficient in numerous programming languages such as Python, C++, and JavaScript, among others. I am very passionate about AI, web development, and Data Analytics, and am pursuing a career in that direction. </span>
        <div className='fields'>
            <div className='field'>
                <img src={ml} alt="AI Image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Artificial Intelligence</h2>
                </div>
            </div>
            <div className='field'>
                <img src={webdev} alt="webdev image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Web Development</h2>
                </div>
            </div>
            <div className='field'>
                <img src={data} alt="data analytics image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Data Analytics</h2>
                </div>
            </div>
        </div>
        <span className='BottomDesc'>Besides Computer Science, I love dogs, astrology(I’m a cancer!), and trying new food spots with my friends!<br/><br/>Feel free to download my resume on the Home Page to see more of my skills. I love to hear about new opportunities and experiences in the AI/Data Science or Software Engineering realm so feel free to reach out!</span>
    </section>
  )
}

export default Aboutme