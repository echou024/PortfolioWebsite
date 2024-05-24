import React, { useState, useEffect } from 'react';
import './works.css';
import csd from '../../assets/csd.png';
import acsd from '../../assets/acsd.png';
import mic from '../../assets/microsoft.png';
import sa from '../../assets/sa.png';
import aisc from '../../assets/aisc.png';
import chatbot from '../../assets/chatbot.png';
import db from '../../assets/database.png';
import log from '../../assets/logreg.png';
import i from '../../assets/info.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <section id='works'>
      <h2 className='PortfolioTitle' data-aos="fade-up">Portfolio</h2>

      {/* Certifications */}
      <span className='sections' data-aos="fade-up"> <b>Certifications:   </b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={csd} alt="CSD Badge" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Certified Scrum Developer® (CSD®)</h2>
            <p>Scrum Alliance</p>
          </div>
        </div>
        <div className='field' data-aos="fade-up">
          <img src={acsd} alt="ACSD Badge" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Advanced Certified Scrum Developer® (ACSD®)</h2>
            <p>Scrum Alliance —— Pending, 1 year of work experience remaining to qualify</p>
          </div>
        </div>
        <div className='field' data-aos="fade-up">
          <img src={mic} alt="Career Essentials in Generative AI Certificate" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Career Essentials in Generative AI</h2>
            <p>Microsoft and LinkedIn</p>
          </div>
        </div>
      </div>

      {/* Work Experiences */}
      <span className='sections' data-aos="fade-up"> <b>Work Experiences:   </b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={sa} alt="Scrum Adventures Logo" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Full Stack Developer Intern at Scrum Adventures, Inc</h2>
            <p>
              <ul>
                <li>Implemented Agile practices such as Pair Programming and Test Driven Development (TDD) to create an improved login experience for CaDoMi Tools Website and ToolBox app using Flutter.</li>
                <li>Developed a page using Django that displays productivity charts and analyzes the progress reports of each team in client companies.</li>
                <li>Collaborated with 2 interns and a Scrum Master to incorporate gathered feedback from stakeholders and product owners.</li>
              </ul>
            </p>
          </div>
            
        </div>
      </div>

      {/* Projects */}
      <span className='sections' data-aos="fade-up"> <b>Projects:</b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={chatbot} alt="AI Image" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Personal Assistant Chatbot</h2>
            <p>
              <ul>
                <li>Led a team of 5 developers in the design and implementation of a full-stack chatbot web application, enhancing user engagement through real-time interactions, coordinating cross-functional teams and managing project timelines.</li>
                <li>Implemented databases using SQLite to manage user accounts and session data securely, and integrated UI/UX components, ensuring a seamless and intuitive user interface.</li>
                <li>Integrated APIs from OpenAI for natural language processing and Open Weather for real-time weather updates, enhancing the functionality and responsiveness of the chatbot.</li>
              </ul>
            </p>
          </div>
          
        </div>
        <div className='field' data-aos="fade-up">
          <img src={db} alt="database image" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Database Management System for Online Storefront</h2>
            <p>
              <ul>
                <li>Developed a custom database management system using PostgreSQL to support the infrastructure of an online storefront, ensuring robust data handling and scalability.</li>
                <li>Engineered database schemas, wrote complex SQL queries, and implemented security measures to protect sensitive customer data.</li>
                <li>Optimized database performance through effective indexing and query optimization, resulting in a 30% reduction in data retrieval times.</li>
              </ul>
            </p>
          </div>
            
        </div>
        <div className='field' data-aos="fade-up">
          <img src={log} alt="logistic regression image" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Gradient Descent Optimization for Logistic Regression on Breast Cancer Data</h2>
            <p>
              <ul>
                <li>Performed logistic regression on a set of cell samples to detect if the cells are benign or malignant.</li>
                <li>Implemented the machine learning model from scratch using various libraries such as numpy, pandas, matplotlib, seaborn, and scikit-learn.</li>
                <li>Developed a bespoke gradient descent optimizer to minimize the binary cross-entropy loss, fine-tuning the model to achieve a predictive accuracy of over 90% on the breast cancer dataset.</li>
              </ul>
            </p>
          </div>
        
        </div>
      </div>

      {/* Extracurriculars */}
      <span className='sections' data-aos="fade-up"> <b>Extracurriculars:</b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={aisc} alt="AISC Logo" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Vice President of Innovation - Artificial Intelligence Student Collective (AISC)</h2>
            <p>Track quarterly event roadmaps, foster key collaborations with professors and professionals, lead projects that demonstrate core AI applications/concepts, host events/workshops that teach industry-relevant skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
