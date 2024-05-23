import React from 'react'
import './skills.css'
import ml from '../../assets/1.png'
import ai from '../../assets/2.png'
import dam from '../../assets/3.png'
import wd from '../../assets/4.png'
import probs from '../../assets/5.png'
import va from '../../assets/6.png'
import py from '../../assets/7.png'
import c from '../../assets/8.png'
import js from '../../assets/9.png'
import hc from '../../assets/10.png'
import sql from '../../assets/11.png'
import r from '../../assets/12.png'
import dj from '../../assets/13.png'
import sl from '../../assets/14.png'
import fl from '../../assets/15.png'
import panda from '../../assets/16.png'
import sea from '../../assets/17.png'
import skl from '../../assets/18.png'
import ex from '../../assets/19.png'
import tab from '../../assets/20.png'
import pow from '../../assets/21.png'
import jup from '../../assets/22.png'
import col from '../../assets/23.png'

const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skillsTitle'>Skills</h2>
        <br/>
        <span className='degree'> <b>Education:   </b>B.S. Computer Science with Business Applications</span>
        <br/>
        <br/>
        <span className='coursesTitle'> <b>Relevant Coursework: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={ml} alt="machine learning" className='courseImg' />
          <img src={ai} alt="artificial intelligence" className='courseImg' />
          <img src={dam} alt="data analysis methods" className='courseImg' />
          <img src={wd} alt="web development" className='courseImg' />
          <img src={probs} alt="Probability & Statistics for Engineering" className='courseImg' />
          <img src={va} alt="visual analytics" className='courseImg' />
        </div>
        {/* <button className='coursesBtn'>See More</button> */}
        <br/>
        <br/>
        <br/>
        <span className='coursesTitle'> <b>Programming Languages: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={py} alt="python" className='courseImg' />
          <img src={c} alt="c++" className='courseImg' />
          <img src={js} alt="JavaScript" className='courseImg' />
          <img src={hc} alt="HTML/CSS" className='courseImg' />
          <img src={sql} alt="SQL" className='courseImg' />
        </div>
        <br/>
        <br/>
        <br/>
        <span className='coursesTitle'> <b>Frameworks & Libraries: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={r} alt="react.js" className='courseImg' />
          <img src={dj} alt="django" className='courseImg' />
          <img src={sl} alt="streamlit" className='courseImg' />
          <img src={fl} alt="flutter" className='courseImg' />
          <img src={panda} alt="Pandas" className='courseImg' />
          <img src={sea} alt="seaborn" className='courseImg' />
          <img src={skl} alt="scikit-learn" className='courseImg' />
        </div>
        <br/>
        <br/>
        <br/>
        <span className='coursesTitle'> <b>Tools: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={ex} alt="excel" className='courseImg' />
          <img src={tab} alt="tableau" className='courseImg' />
          <img src={pow} alt="powerBI" className='courseImg' />
          <img src={jup} alt="jupyter notebook" className='courseImg' />
          <img src={col} alt="google colab" className='courseImg' />
        </div>
        <br/>
        <br/>
    </section>
  )
}

export default Skills