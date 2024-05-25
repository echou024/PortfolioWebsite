import React, { useEffect } from 'react';
import './aboutme.css';
import data from '../../assets/data.png';
import ml from '../../assets/ml.png';
import webdev from '../../assets/webdev.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out-sine',
      once: false,
      mirror: true,
      offset: 200
    });
  }, []);

  return (
    <section id='Info'>
        <span className='InfoTitle' data-aos="fade-up">About Me</span>
        <span className='Desc' data-aos="fade-up">
            My name is Eva Choudhary and I am from Manhattan Beach, California. I am currently a junior at the University of California, Riverside studying Computer Science and Business.
            <br/> I am proficient in numerous programming languages such as Python, C++, and JavaScript, among others. I am very passionate about AI, web development, and Data Analytics, and am pursuing a career in that direction.
        </span>
        <div className='fields1'>
            <div className='field1' data-aos="zoom-in">
                <img src={ml} alt="AI" className='fieldImg'/>
                <div className='fieldText1'>
                    <h2>Artificial Intelligence</h2>
                </div>
            </div>
            <div className='field1' data-aos="zoom-in">
                <img src={webdev} alt="webdev" className='fieldImg'/>
                <div className='fieldText1'>
                    <h2>Web Development</h2>
                </div>
            </div>
            <div className='field1' data-aos="zoom-in">
                <img src={data} alt="data analytics" className='fieldImg'/>
                <div className='fieldText1'>
                    <h2>Data Analytics</h2>
                </div>
            </div>
        </div>
        <span className='BottomDesc' data-aos="fade-up">
            Besides Computer Science, I love dogs, astrology (I’m a cancer!), and trying new food spots with my friends!
            <br/><br/>Feel free to download my resume on the Home Page to see more of my skills. I love to hear about new opportunities and experiences in the AI/Data Science or Software Engineering realm so feel free to reach out!
        </span>
    </section>
  )
}

export default Aboutme;
