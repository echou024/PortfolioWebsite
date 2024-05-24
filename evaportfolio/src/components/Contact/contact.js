import React from 'react'
import './contact.css'
import git from '../../assets/github.png'
import linked from '../../assets/linkedIn.png'

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Let's Connect</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunties.</span>
            <form className='contactForm'>
                <input type="text" className='name' placeholder='Your Name' />
                <input type="email" className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value="Send" className="submitBtn">Submit</button>
                <div className='links'>
                    <img src={git} alt="GitHub logo" className='link'/>
                    <img src={linked} alt="LinkedIn logo" className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact