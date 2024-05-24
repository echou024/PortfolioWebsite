import React, { useEffect } from 'react';
import AOS from 'aos';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/downloadicon.png';
import design from '../../assets/background.png';
import ReactTypingEffect from 'react-typing-effect';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,  
      once: false,  
      mirror: true  
    });
    
    AOS.refresh();
  }, []);

  return (
    <section id='intro'>
        <div className='introContent' data-aos="fade-up">
            <span className='hello' data-aos="fade-right">Hello,</span>
            <span className='introText' data-aos="fade-left">I'm <span className="introName"><ReactTypingEffect text={["Eva"]} /></span><br/>Computer Science Student</span>
            <p className='introPara' data-aos="fade-up">I am a Computer Science student passionate about utilizing advanced <br/> technologies to uncover insights and create impactful digital solutions.</p>
            <a href="EvaChoudharyResume.pdf" target="_blank" download="EvaChoudharyResume.pdf" rel="noreferrer" className="Resume">
                <button className='btn' data-aos="zoom-in">
                    <img src={btnImg} alt='Download Icon' className='downloadImg'/>
                    Resume
                </button>
            </a>
        </div>
        <img src={bg} alt='Headshot' className='bg' data-aos="fade-in" />
        <img src={design} alt='background design' className='design' data-aos="fade-down" />
    </section>
  )
}

export default Intro;
