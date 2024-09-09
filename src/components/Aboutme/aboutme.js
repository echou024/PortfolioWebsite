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
            Hi! I'm Eva Choudhary and I am from Manhattan Beach in Los Angeles, California. I am a senior at the University of California, Riverside studying Computer Science with Business Applications.
            <br/> I am passionate about AI, Web Development, and Data Analytics, and am currently seeking new grad software engineering roles to apply my skills in full-stack and AI development.
        </span>
        <div className='field1' data-aos="zoom-in">
            <img src={ml} className='fieldImg'/>
            <div className='fieldText1'>
                <h2>Artificial Intelligence</h2>
            </div>
        </div>
        <div className='field1' data-aos="zoom-in">
            <img src={webdev} className='fieldImg'/>
            <div className='fieldText1'>
                <h2>Web Development</h2>
            </div>
        </div>
        <div className='field1' data-aos="zoom-in">
            <img src={data} className='fieldImg'/>
            <div className='fieldText1'>
                <h2>Data Analytics</h2>
            </div>
        </div>

        <span className='BottomDesc' data-aos="fade-up">
            Besides Computer Science, I love dogs, astrology (I’m a cancer!), and trying new food spots with my friends!
            <br/><br/>Feel free to download my resume <a href="EvaChoudharyResume.pdf" download="EvaChoudharyResume.pdf" rel="noreferrer" className="Resume">here</a> to see more of my skills. I love to hear about new opportunities and experiences in the AI Development/Software Engineering realm so feel free to reach out!
        </span>
    </section>
  )
}

export default Aboutme;
