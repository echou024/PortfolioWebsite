import React, { useRef } from 'react';
import './contact.css'
import git from '../../assets/github.png'
import linked from '../../assets/linkedIn.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fmqmxrc', 'template_fketbov', form.current, {
        publicKey: 'tPnF8AdUaxomY8ZWY',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          e.target.reset();
          alert('Message Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Let's Connect</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunties.</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='from_name'/>
                <input type="email" className='email' placeholder='Your Email' name='from_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className="submitBtn">Submit</button>
                <div className='links'>
                  <a href="https://github.com/echou024" target="_blank" rel="noopener noreferrer">
                    <img src={git} alt="GitHub logo" className='link'/>
                  </a>
                  <a href="https://www.linkedin.com/in/evachoudhary" target="_blank" rel="noopener noreferrer">
                    <img src={linked} alt="LinkedIn logo" className='link'/>
                  </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact