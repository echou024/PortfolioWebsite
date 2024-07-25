import React, { useEffect } from 'react';
import './works.css';
import csd from '../../assets/csd.png';
import acsd from '../../assets/acsd.png';
import mic from '../../assets/microsoft.png';
import sa from '../../assets/sa.png';
import aisc from '../../assets/aisc.png';
import chatbot from '../../assets/chatbot.png';
import port from '../../assets/port.png';
import nyt from '../../assets/nyt.png';
import tic from '../../assets/tic.png';
import chat from '../../assets/chat.png';
import coupon from '../../assets/coupon.png';
import pca from '../../assets/pca.png';
import digits from '../../assets/digits.png';
import prime from '../../assets/prime.png';
import log from '../../assets/logreg.png';
import oracle from '../../assets/oracle.png';
import peach from '../../assets/peach.png';
import star from '../../assets/star.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = () => {

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
    <section id='works'>
      <h2 className='PortfolioTitle' data-aos="fade-up">Portfolio</h2>

      {/* Certifications */}
      <span className='sections' data-aos="fade-up"> <b>Certifications:   </b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={oracle} alt="OCI Generative AI Professional Certification" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>OCI Generative AI Professional Certification</h2>
            <p>Oracle</p>
          </div>
        </div>
        <div className='field' data-aos="fade-up">
          <img src={mic} alt="Career Essentials in Generative AI Certificate" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Career Essentials in Generative AI</h2>
            <p>Microsoft and LinkedIn</p>
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
          <img src={csd} alt="CSD Badge" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Certified Scrum Developer® (CSD®)</h2>
            <p>Scrum Alliance</p>
          </div>
        </div>
      </div>

      {/* Work Experiences */}
      <span className='sections' data-aos="fade-up"> <b>Work Experiences:   </b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <a href="https://headstarter.co/" target="_blank" rel="noopener noreferrer">
            <img src={star} alt="Headstarter" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Software Engineering Fellow at Headstarter AI</h2>
            <p>
              <ul>
                <li>Developing and deploying 5+ AI-driven web applications using ReactJS, NextJS, OpenAI, AWS, and StripeAPI with over 98% accuracy for over 1000 users and enhancing user interaction through innovative solutions like AI Customer Support.</li>
                <li>Leading a team of 4+ engineering fellows in building a Pantry Tracker application with ReactJS, NextJS, and Firebase, focusing on seamless UI/UX design and robust backend integration to optimize user pantry management.</li>
                <li>Receiving advanced training from Amazon, Bloomberg, and Capital One engineers on Agile methodologies, CI/CD practices, Git version control, and microservice architecture, applying these skills to lead and deliver high-impact projects.</li>
              </ul>
            </p>
          </div>  
        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://www.getpeachy.in/" target="_blank" rel="noopener noreferrer">
            <img src={peach} alt="Peach India Logo" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Business Data Analyst Intern at Peach</h2>
            <p>
              <ul>
                <li>Utilized Google Analytics to track and analyze user sessions, identifying key metrics such as device type, session length, and page views, leading to a 15% increase in session duration and improved user engagement within a year.</li>
                <li>Employed Shopify and Tableau to examine visitor sources and behavior, leveraging cookies and tracking technologies to enhance traffic acquisition strategies, resulting in a 20% increase in overall website visitors in a year.</li>
                <li>Streamlined order management processes using Shopify and Excel, improving order accuracy and delivery times.</li>
              </ul>
            </p>
          </div>  
        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://scrumadventures.com/" target="_blank" rel="noopener noreferrer">
            <img src={sa} alt="Scrum Adventures Logo" className='fieldImg' />
          </a>
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
          <a href="https://github.com/echou024/AISC-GeminiChatbot" target="_blank" rel="noopener noreferrer">
            <img src={chatbot} alt="Personal Assistant Chatbot" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Task Management Web Application with Gemini Chatbot</h2>
            <p>
              <ul>
                <li>Developed a full-stack task management dashboard integrated with a chatbot using Google's Gemini Pro API, enhancing user task management efficiency.</li>
                <li>Utilized Streamlit for the user interface, Python for backend development, and SQLite3 for database management, ensuring a seamless and interactive user experience.</li>
                <li>Implemented secure user authentication and task management features, leveraging bcrypt hashing for password security and robust database initialization scripts.</li>
                <li>Created a responsive chatbot interface capable of processing text and image inputs, dynamically interacting with Google's AI models to deliver tailored responses.</li>
              </ul>
            </p>
          </div>
          
        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/AITicTacToe" target="_blank" rel="noopener noreferrer">
            <img src={tic} alt="AI Tic Tac Toe" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>AI Tic Tac Toe</h2>
            <p>
              <ul>
                <li>Developed an AI Tic Tac Toe game using HTML, CSS, and JavaScript using detection logic for horizontal, vertical, and diagonal rows, ensuring accurate game outcome determination.</li>
                <li>Implemented an MinMax algorithm to integrate the AI player and optimize the computer's decision-making process, providing a challenging yet approachable gameplay experience.</li>
                <li>Displayed real-time messages indicating the current player's turn and displayed scores for each player, incorporating functionality for resetting scores and starting new games.</li>
                <li>Utilized DOM manipulation techniques to update game board and UI elements dynamically.</li>
              </ul>
            </p>
          </div>

        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://github.com/narann28/CS110FinalProject" target="_blank" rel="noopener noreferrer">
            <img src={chat} alt="Chatroom Web Application" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Chatroom Web Application</h2>
            <p>
              <ul>
                <li>Developed a real-time chatroom application with user authentication and authorization using Node.js and MongoDB.</li>
                <li>Designed and implemented user profiles with features for updating personal information, viewing other users' profiles, and validating/sanitizing inputs.</li>
                <li>Enabled message management functionalities including editing, deleting, and searching messages within chat rooms.</li>
                <li>Styled the application using CSS to ensure a responsive and user-friendly interface.</li>
              </ul>
            </p>
          </div>

        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/PortfolioWebsite" target="_blank" rel="noopener noreferrer">
            <img src={port} alt="Personal Portfolio Website" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Personal Portfolio Website</h2>
            <p>
              <ul>
                <li>Engineered a full-stack, responsive portfolio website employing React.js, Tailwind CSS, and HTML, showcasing a portfolio of software projects and professional skills.</li>
                <li>Implemented interactive UI/UX elements using JavaScript features, creating a dynamic web presence that operates seamlessly across different browsers and devices.</li>
                <li>Deployed the website to a cloud server using CI/CD pipelines, optimizing for high availability and low latency access.</li>
              </ul>
            </p>
          </div>

          </div>
        <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/TopNYTimesArticles" target="_blank" rel="noopener noreferrer">
            <img src={nyt} alt="Top New York Times Articles" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Top New York Times Articles</h2>
            <p>
              <ul>
                <li>Developed a React application to display top New York Times articles with dynamic filtering based on time period and popularity, using Fetch API for data retrieval.</li>
                <li>Implemented interactive components including Articles, Sidebar, and Title, utilizing React Hooks (useState, useEffect) for state management and asynchronous updates.</li>
                <li>Created a responsive two-column layout with pagination support, ensuring optimal viewing experience across different screen sizes and maintaining user engagement.</li>
                <li>Added advanced features such as a search field with input validation, dynamic title updates based on user selections, and error handling with placeholder content for unavailable articles.</li>
              </ul>
            </p>
          </div>
            
        </div>
        <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/LogisticRegressionOnBreastCancerDataSet" target="_blank" rel="noopener noreferrer">
            <img src={log} alt="Gradient Descent Optimization for Logistic Regression" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Logistic Regression on Breast Cancer Data Set</h2>
            <p>
              <ul>
                <li>Plotted the logistic function and performed logistic regression on the Wisconsin breast cancer dataset to classify cells as benign or malignant.</li>
                <li>Employed the sklearn built-in LogisticRegression class to find optimal weights, leveraging its fit routine with an optimizer to match the data accurately.</li>
                <li>Developed a custom gradient descent optimizer from scratch to understand the underlying optimization process in logistic regression.</li>
                <li>Utilized features manually recorded by physicians from fine needle aspiration samples to enhance the model's diagnostic accuracy, demonstrating proficiency in machine learning and data analysis.</li>
              </ul>
            </p>
          </div>


        </div>
          <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/AmazonPrimeConsumerBehaviorAnalysis" target="_blank" rel="noopener noreferrer">
              <img src={prime} alt="Amazon Prime Consumer Behavior Analysis" className='fieldImg' />
            </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Amazon Prime Consumer Behavior Analysis</h2>
            <p>
              <ul>
                <li>Conducted a consumer behavior analysis on Amazon Prime using data from 2,500 users to observe patterns in user interaction, improve user experience, and enhance marketing strategies.</li>
                <li>Investigated factors influencing user preferences and interests, as well as the impact of different subscription plans on user retention rates and engagement levels.</li>
                <li>Identified primary user segments based on demographic data and analyzed device usage correlation with customer support interactions to provide actionable insights for Amazon Prime.</li>
                <li>Developed recommendations for improving Amazon Prime's user experience and marketing strategies by analyzing user feedback and behavioral insights from the dataset.</li>
              </ul>
            </p>
        </div>

        </div>
          <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/ImageClassificationOnHandwrittenDigitsMulticlassClassification" target="_blank" rel="noopener noreferrer">
              <img src={digits} alt="Classification On Handwritten Digits Using Multiclass Classification" className='fieldImg' />
            </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Image Classification On Handwritten Digits Using Multiclass Classification</h2>
            <p>
              <ul>
                <li>Implemented image classification on the MNIST handwritten digits dataset using a two-layer neural network, incorporating loss functions, gradients, and optimizers for effective training.</li>
                <li>Utilized Multiclass classification to distinguish between 10 handwritten digits (0-9) with a training set of 60,000 images and a test set of 10,000 images, each of size 28x28 pixels.</li>
                <li>Leveraged Pandas for data manipulation, Matplotlib for visualization, and Numpy for numerical operations to facilitate the development and analysis of the neural network model.</li>
                <li>Achieved improved classification accuracy through iterative optimization and model refinement, demonstrating proficiency in machine learning and neural network frameworks.</li>
              </ul>
            </p>
        </div>

        </div>
          <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/In-Vehicle-Coupon-Recommendation-KNN-Analysis" target="_blank" rel="noopener noreferrer">
              <img src={coupon} alt="In Vehicle Coupon Recommendation KNN Analysis" className='fieldImg' />
            </a>

          <div className='fieldText' data-aos="fade-up">
            <h2>In Vehicle Coupon Recommendation KNN Analysis</h2>
            <p>
              <ul>
                <li>Collaborated on a project analyzing the In-Vehicle Coupon Recommendation dataset from an Amazon Mechanical Turk survey to understand factors influencing drivers' acceptance of coupons in various driving scenarios.</li>
                <li>Contributed to data cleaning and preparation by removing unnecessary attributes and converting categorical data to numerical format, ensuring the dataset was ready for analysis.</li>
                <li>Implemented the K-Nearest Neighbors (KNN) algorithm, including determining the optimal K value, to model the relationship between driving situations and coupon acceptance.</li>
                <li>Created visualizations, such as pie charts, and prepared presentation slides to effectively communicate the findings and insights from the KNN analysis.</li>
              </ul>
            </p>
        </div>

        </div>
          <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/PCAForDimensionalityReduction" target="_blank" rel="noopener noreferrer">
              <img src={pca} alt="PCA For Dimensionality Reduction" className='fieldImg' />
            </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>PCA For Dimensionality Reduction</h2>
            <p>
              <ul>
                <li>Implemented and tested the K-means algorithm for clustering and Principal Component Analysis (PCA) for dimensionality reduction on a dataset.</li>
                <li>Applied K-means to perform segmentation and quantization on a color image, enhancing image analysis capabilities.</li>
                <li>Computed PCA using Singular Value Decomposition (SVD) on a simple dataset and visualized PCA results for images, providing insights into data variance and feature importance.</li>
                <li>Utilized the LFW ("Labeled Faces in the Wild") dataset, a widely-used collection of cropped face images from news articles, as part of the sklearn library to demonstrate the effectiveness of clustering and PCA techniques.</li>
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
