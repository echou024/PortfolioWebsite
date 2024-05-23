import React from 'react'
import './skills.css'
import ml from '../../assets/1.png'
import ai from '../../assets/2.png'
import dam from '../../assets/3.png'
import wd from '../../assets/4.png'
import probs from '../../assets/5.png'
import va from '../../assets/6.png'

const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skillsTitle'>Skills</h2>
        <span className='degree'> <b>Education: </b>B.S. Computer Science with Business Applications</span>
        <br/>
        <span className='coursesTitle'> <b>Relevant Coursework: </b></span>
        <div className='coursesImgs'>
          <img src={ml} alt="machine learning" className='courseImg' />
          <img src={ai} alt="artificial intelligence" className='courseImg' />
          <img src={dam} alt="data analysis methods" className='courseImg' />
          <img src={wd} alt="web development" className='courseImg' />
          <img src={probs} alt="Probability & Statistics for Engineering" className='courseImg' />
          <img src={va} alt="visual analytics" className='courseImg' />
        
        </div>
    </section>
  )
}

export default Skills