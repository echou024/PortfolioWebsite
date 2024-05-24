import React, { useEffect } from 'react';
import AOS from 'aos';
import './skills.css';
import ml from '../../assets/1.png';
import ai from '../../assets/2.png';
import dam from '../../assets/3.png';
import wd from '../../assets/4.png';
import probs from '../../assets/5.png';
import va from '../../assets/6.png';
import py from '../../assets/7.png';
import c from '../../assets/8.png';
import js from '../../assets/9.png';
import hc from '../../assets/10.png';
import sql from '../../assets/11.png';
import r from '../../assets/12.png';
import dj from '../../assets/13.png';
import sl from '../../assets/14.png';
import fl from '../../assets/15.png';
import panda from '../../assets/16.png';
import sea from '../../assets/17.png';
import skl from '../../assets/18.png';
import ex from '../../assets/19.png';
import tab from '../../assets/20.png';
import pow from '../../assets/21.png';
import jup from '../../assets/22.png';
import col from '../../assets/23.png';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,  
      once: false,  
      mirror: true  
    });
  }, []);

  return (
    <section id='skills'>
        <h2 className='skillsTitle' data-aos="fade-up">Skills</h2>
        <span className='degree' data-aos="fade-up"><b>Education:   </b>B.S. Computer Science with Business Applications</span>
        <br/>
        <br/>
        <span className='degree' data-aos="fade-up"><b>Relevant Coursework: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={ml} alt="machine learning" className='courseImg' data-aos="zoom-in" />
          <img src={ai} alt="artificial intelligence" className='courseImg' data-aos="zoom-in" />
          <img src={dam} alt="data analysis methods" className='courseImg' data-aos="zoom-in" />
          <img src={wd} alt="web development" className='courseImg' data-aos="zoom-in" />
          <img src={probs} alt="Probability & Statistics for Engineering" className='courseImg' data-aos="zoom-in" />
          <img src={va} alt="visual analytics" className='courseImg' data-aos="zoom-in" />
        </div>
        {/* <button className='coursesBtn'>See More</button> */}
        <br/>
        <br/>
        <br/>
        <span className='degree' data-aos="fade-up"><b>Programming Languages: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={py} alt="python" className='courseImg' data-aos="zoom-in" />
          <img src={c} alt="c++" className='courseImg' data-aos="zoom-in" />
          <img src={js} alt="JavaScript" className='courseImg' data-aos="zoom-in" />
          <img src={hc} alt="HTML/CSS" className='courseImg' data-aos="zoom-in" />
          <img src={sql} alt="SQL" className='courseImg' data-aos="zoom-in" />
        </div>
        <br/>
        <br/>
        <br/>
        <span className='degree' data-aos="fade-up"><b>Frameworks & Libraries: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={r} alt="react.js" className='courseImg' data-aos="zoom-in" />
          <img src={dj} alt="django" className='courseImg' data-aos="zoom-in" />
          <img src={sl} alt="streamlit" className='courseImg' data-aos="zoom-in" />
          <img src={fl} alt="flutter" className='courseImg' data-aos="zoom-in" />
          <img src={panda} alt="Pandas" className='courseImg' data-aos="zoom-in" />
          <img src={sea} alt="seaborn" className='courseImg' data-aos="zoom-in" />
          <img src={skl} alt="scikit-learn" className='courseImg' data-aos="zoom-in" />
        </div>
        <br/>
        <br/>
        <br/>
        <span className='degree' data-aos="fade-up"><b>Tools: </b></span>
        <br/>
        <div className='coursesImgs'>
          <img src={ex} alt="excel" className='courseImg' data-aos="zoom-in" />
          <img src={tab} alt="tableau" className='courseImg' data-aos="zoom-in" />
          <img src={pow} alt="powerBI" className='courseImg' data-aos="zoom-in" />
          <img src={jup} alt="jupyter notebook" className='courseImg' data-aos="zoom-in" />
          <img src={col} alt="google colab" className='courseImg' data-aos="zoom-in" />
        </div>
        <br/>
        <br/>
    </section>
  )
}

export default Skills;
