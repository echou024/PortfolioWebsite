import React, { useState, useEffect } from 'react';
import './works.css';
import Modal from '../../components/Modal/modal';
import csd from '../../assets/csd.png';
import acsd from '../../assets/acsd.png';
import mic from '../../assets/microsoft.png';
import sa from '../../assets/sa.png';
import aisc from '../../assets/aisc.png';
import chatbot from '../../assets/chatbot.png';
import db from '../../assets/database.png';
import log from '../../assets/logreg.png';
import i from '../../assets/info.png';

const Works = () => {
  // State object to manage multiple modals
  const [modalsOpen, setModalsOpen] = useState({
    scrumAdventures: false,
    chatbot: false,
    database: false,
    logisticRegression: false,
    aisc: false
  });

  useEffect(() => {
    const body = document.body;
    // Check if any modal is open by converting the modal states to an array and checking if any are true
    const isAnyModalOpen = Object.values(modalsOpen).some(value => value);
    if (isAnyModalOpen) {
      body.classList.add('body-no-scroll');
    } else {
      body.classList.remove('body-no-scroll');
    }

    return () => {
      body.classList.remove('body-no-scroll');
    };
  }, [modalsOpen]);

  const openModal = (modalKey) => {
    setModalsOpen(prev => ({ ...prev, [modalKey]: true }));
  };

  const closeModal = () => {
    setModalsOpen({
      scrumAdventures: false,
      chatbot: false,
      database: false,
      logisticRegression: false,
      aisc: false
    });
  };

  return (
    <section id='works'>
        <h2 className='PortfolioTitle'>Portfolio</h2>

        {/* Certifications */}
        <span className='sections'> <b>Certifications:   </b></span>
        <div className='fields'>
            <div className='field'>
                <img src={csd} alt="CSD Badge" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Certified Scrum Developer® (CSD®)</h2>
                    <p>Scrum Alliance</p>
                </div>
            </div>
            <div className='field'>
                <img src={acsd} alt="ACSD Badge" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Advanced Certified Scrum Developer® (ACSD®)</h2>
                    <p>Scrum Alliance —— Pending, 1 year of work experience remaining to qualify</p>
                </div>
            </div>
            <div className='field'>
                <img src={mic} alt="Career Essentials in Generative AI Certificate" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Career Essentials in Generative AI</h2>
                    <p>Microsoft and LinkedIn</p>
                </div>
            </div>
        </div>

        {/* Work Experiences */}
        <span className='sections'> <b>Work Experiences:   </b></span>
        <div className='fields'>
            <div className='field'>
                <img src={sa} alt="Scrum Adventures Logo" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Full Stack Developer Intern</h2>
                    <p>Scrum Adventures, Inc</p>
                </div>
                <img src={i} alt="info icon" className='infoIcon' onClick={() => openModal('scrumAdventures')} />
                <Modal isOpen={modalsOpen.scrumAdventures} onClose={closeModal}>
                  <h3>Full Stack Developer Intern at Scrum Adventures, Inc</h3>
                  <ul>
                    <li>Implemented Agile practices such as Pair Programming and Test Driven Development (TDD) to create an improved login experience for CaDoMi Tools Website and ToolBox app using Flutter.</li>
                    <li>Developed a page using Django that displays productivity charts and analyzes the progress reports of each team in client companies.</li>
                    <li>Collaborated with 2 interns and a Scrum Master to incorporate gathered feedback from stakeholders and product owners.</li>
                  </ul>
                </Modal>
            </div>
        </div>

        {/* Projects */}
        <span className='sections'> <b>Projects:</b></span>
        <div className='fields'>
            <div className='field'>
                <img src={chatbot} alt="AI Image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Personal Assistant Chatbot</h2>
                    <p>LLMs, Web Development, Python, APIs</p>
                </div>
                <img src={i} alt="info icon" className='infoIcon' onClick={() => openModal('chatbot')} />
                <Modal isOpen={modalsOpen.chatbot} onClose={closeModal}>
                  <h3>Personal Assistant Chatbot</h3>
                  <ul>
                    <li>Led a team of 5 developers in the design and implementation of a full-stack chatbot web application, enhancing user engagement through real-time interactions, coordinating cross-functional teams and managing project timelines.</li>
                    <li>Implemented databases using SQLite to manage user accounts and session data securely, and integrated UI/UX components, ensuring a seamless and intuitive user interface.</li>
                    <li>Integrated APIs from OpenAI for natural language processing and Open Weather for real-time weather updates, enhancing the functionality and responsiveness of the chatbot.</li>
                  </ul>
                </Modal>
            </div>
            <div className='field'>
                <img src={db} alt="database image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Database Management System for Online Storefront</h2>
                    <p>SQL, Database Management, JavaScript</p>
                </div>
                <img src={i} alt="info icon" className='infoIcon' onClick={() => openModal('database')} />
                <Modal isOpen={modalsOpen.database} onClose={closeModal}>
                  <h3>Database Management System for Online Storefront</h3>
                  <ul>
                    <li>Developed a custom database management system using PostgreSQL to support the infrastructure of an online storefront, ensuring robust data handling and scalability.</li>
                    <li>Engineered database schemas, wrote complex SQL queries, and implemented security measures to protect sensitive customer data.</li>
                    <li>Optimized database performance through effective indexing and query optimization, resulting in a 30% reduction in data retrieval times.</li>
                  </ul>
                </Modal>
            </div>
            <div className='field'>
                <img src={log} alt="logistic regression image" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Gradient Descent Optimization for Logistic Regression on Breast Cancer Data</h2>
                    <p>Machine Learning, Data Analytics, Python, Scikit-Learn</p>
                </div>
                <img src={i} alt="info icon" className='infoIcon' onClick={() => openModal('logisticRegression')} />
                <Modal isOpen={modalsOpen.logisticRegression} onClose={closeModal}>
                  <h3>Gradient Descent Optimization for Logistic Regression on Breast Cancer Data</h3>
                  <ul>
                    <li>Performed logistic regression on a set of cell samples to detect if the cells are benign or malignant.</li>
                    <li>Implemented the machine learning model from scratch using various libraries such as numpy, pandas, matplotlib, seaborn, and scikit-learn.</li>
                    <li>Developed a bespoke gradient descent optimizer to minimize the binary cross-entropy loss, fine-tuning the model to achieve a predictive accuracy of over 90% on the breast cancer dataset.</li>
                  </ul>
                </Modal>
            </div>
        </div>
        {/* Extracurriculars */}
        <span className='sections'> <b>Extracurriculars:</b></span>
        <div className='fields'>
            <div className='field'>
                <img src={aisc} alt="AISC Logo" className='fieldImg'/>
                <div className='fieldText'>
                    <h2>Vice President of Innovation</h2>
                    <p>Artificial Intelligence Student Collective (AISC)</p>
                </div>
                <img src={i} alt="info icon" className='infoIcon' onClick={() => openModal('aisc')} />
                <Modal isOpen={modalsOpen.aisc} onClose={closeModal}>
                  <h3>Vice President of Innovation (AISC) </h3>
                  <p>Track quarterly event roadmaps, foster key collaborations with professors and professionals, lead projects that demonstrate core AI applications/concepts, host events/workshops that teach industry-relevant skills.</p>
                </Modal>
            </div>
        </div>

    </section>
  );
}

export default Works;
