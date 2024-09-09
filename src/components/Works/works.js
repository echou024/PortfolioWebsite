import React, { useEffect } from 'react';
import './works.css';
import csd from '../../assets/csd.png';
import acsd from '../../assets/acsd.png';
import mic from '../../assets/microsoft.png';
import sa from '../../assets/sa.png';
import aisc from '../../assets/aisc.png';
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
import pantry from '../../assets/pantry.png';
import rag from '../../assets/rag.png';
import reviso from '../../assets/reviso.png';
import dumpster from '../../assets/dumpster.png';
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
      <span className='sections' data-aos="fade-up"><b>Certifications:</b></span>
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
      <span className='sections' data-aos="fade-up"><b>Work Experiences:</b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <a href="https://headstarter.co/" target="_blank" rel="noopener noreferrer">
            <img src={star} alt="Headstarter" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Software Engineering Fellow at Headstarter AI</h2>
            <ul>
              <li>Developing and deploying 5+ AI-driven web applications using ReactJS, NextJS, OpenAI, AWS, and StripeAPI with over 98% accuracy for over 1000 users and enhancing user interaction through innovative solutions like AI Customer Support.</li>
              <li>Developed a full-stack RAG-based AI "Rate My Professor" assistant using Next.js, Node.js, Pinecone, and OpenAI, enabling personalized professor recommendations through vector-embedded searches and natural language responses.</li>
              <li>Implemented a RESTful API with Next.js for seamless communication between frontend, Pinecone, and OpenAI, optimizing performance with streaming responses and 384-dimensional embeddings for rapid, real-time queries.</li>
            </ul>
          </div>
        </div>

        <div className='field' data-aos="fade-up">
          <a href="https://www.getpeachy.in/" target="_blank" rel="noopener noreferrer">
            <img src={peach} alt="Peach India Logo" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Business Data Analyst Intern at Peach</h2>
            <ul>
              <li>Tracked and analyzed user behavior using Google Analytics, focusing on device type, session length, and page views, which led to a 15% increase in session duration.</li>
              <li>Analyzed visitor sources and behavior with Shopify and Tableau, optimizing traffic acquisition strategies, leading to a 7% increase in website visitors over 10 weeks.</li>
              <li>Streamlined order management processes using Shopify and Excel, improving order accuracy and delivery times.</li>
            </ul>
          </div>
        </div>

        <div className='field' data-aos="fade-up">
          <a href="https://scrumadventures.com/" target="_blank" rel="noopener noreferrer">
            <img src={sa} alt="Scrum Adventures Logo" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Full Stack Developer Intern at Scrum Adventures, Inc</h2>
            <ul>
              <li>Launched Enterprise Dashboard with Django and Heroku, enabling client teams to track productivity metrics and visualize progress across their projects, driving 30% adoption within client organizations.</li>
              <li>Created Timebox feature, reducing task tracking time by 40% with Dart widgets and efficient data syncing with Firebase.</li>
              <li>Conducted unit and end-to-end testing with Pytest and Selenium, reducing bugs by 25%.</li>
            </ul>
          </div>
        </div>
      </div>






      {/* Projects */}
      <span className='sections' data-aos="fade-up"><b>Web Development/AI Development Projects:</b></span>
      <div className='fields'>

      <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/Dumpster" target="_blank" rel="noopener noreferrer">
            <img src={dumpster} alt="Dumpster" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Dumpster</h2>
            <p>
            **In Progress**  Introducing an AI-powered photo curation app built with React Native and TypeScript, designed to capture, organize, and share your photos effortlessly. The app curates themed collections, or "dumps," using the Gemini Pro Vision API. With Firebase for real-time collaboration, users can easily share collections through dumpID codes, while daily prompts inspire creativity and keep your memories beautifully organized.
            </p>
          </div>
      </div>

      <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/Reviso" target="_blank" rel="noopener noreferrer">
            <img src={reviso} alt="Reviso" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>Reviso</h2>
            <p>
            Reviso is an AI-powered flashcard app that simplifies studying by generating personalized flashcards. Built with Next.js for a dynamic frontend, it uses Clerk for authentication, Google Gemini for AI flashcards, and Firebase for real-time data. Material UI ensures a clean, responsive design for an optimal study experience.
            </p>
          </div>
      </div>

      <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/AI-Rate-My-Prof-Assistant" target="_blank" rel="noopener noreferrer">
            <img src={rag} alt="AI-rmp" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>RAG Rate My Prof AI Assistant</h2>
            <p>
            A RAG based AI-powered assistant that provides personalized answers to student questions about professors, using given data on ratings, reviews, and teaching styles. The chatbot is designed to deliver accurate insights, helping students make informed decisions on course and professor selection.
            </p>
          </div>
      </div>

      <div className='field' data-aos="fade-up">
          <a href="https://github.com/echou024/PantryPro" target="_blank" rel="noopener noreferrer">
            <img src={pantry} alt="PantryPro" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>PantryPro</h2>
            <p>
            This project is a pantry management application that allows users to keep track of pantry items by adding or removing items and updating their quantities, and even generate recipes based on the pantry items available. The project uses Next.js as the frontend framework, OpenAI for the generative ai service, and Firebase as the backend service.
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
              An AI Tic Tac Toe game using HTML, CSS, and JavaScript using detection logic for horizontal, vertical, and diagonal rows, ensuring accurate game outcome determination. Uses an MinMax algorithm to integrate the AI player and optimize the computer's decision-making process, providing a challenging yet approachable gameplay experience.
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
              A full-stack, responsive portfolio website employing React.js, Tailwind CSS, and HTML, showcasing a portfolio of software projects and professional skills. Includes interactive UI/UX elements using JavaScript features, creating a dynamic web presence that operates seamlessly across different browsers and devices.
            </p>
          </div>
        </div>

        <div className='field' data-aos="fade-up">
          <a href="https://github.com/narann28/CS110FinalProject" target="_blank" rel="noopener noreferrer">
            <img src={chat} alt="ChatCorner" className='fieldImg' />
          </a>
          <div className='fieldText' data-aos="fade-up">
            <h2>ChatCorner</h2>
            <p>
              ChatCorner is a web application that allows users to log in, create new chatrooms, and manage their messages with ease. Users can edit, delete, and search through messages. Our team built the frontend using React.js and Express, while MongoDB powers the backend for storing data.
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
              A React application that displays the top New York Times articles with dynamic filtering based on time period and popularity, using Fetch API for data retrieval.
              Has a responsive two-column layout with pagination support, ensuring optimal viewing experience across different screen sizes and advanced features such as a search field with input validation, dynamic title updates based on user selections, and error handling with placeholder content for unavailable articles.
            </p>
          </div>
        </div>
      </div>






      <span className='sections' data-aos="fade-up"><b>Data Analytics/Machine Learning Projects:</b></span>
      <div className='fields'>

        <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/AmazonPrimeConsumerBehaviorAnalysis" target="_blank" rel="noopener noreferrer">
              <img src={prime} alt="Amazon-Prime-Consumer-Behavior-Analysis" className='fieldImg' />
            </a>
            <div className='fieldText' data-aos="fade-up">
              <h2>Amazon Prime Consumer Behavior Analysis</h2>
              <p>
              This project involved conducting a consumer behavior analysis on Amazon Prime using data from 2,500 users to identify patterns in user interaction and improve marketing strategies. The analysis focused on user preferences, subscription plans, and device usage, uncovering key user segments and their correlation with customer support interactions. The findings provided actionable insights and recommendations to enhance Amazon Prime's user experience and optimize marketing efforts.
              </p>
            </div>
        </div>

        <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/In-Vehicle-Coupon-Recommendation-KNN-Analysis" target="_blank" rel="noopener noreferrer">
              <img src={coupon} alt="coupon" className='fieldImg' />
            </a>
            <div className='fieldText' data-aos="fade-up">
              <h2>In Vehicle Coupon Recommendation KNN Analysis</h2>
              <p>
              This project analyzed the In-Vehicle Coupon Recommendation dataset to explore factors influencing drivers' acceptance of coupons in various scenarios. After cleaning and preparing the data, the K-Nearest Neighbors (KNN) algorithm was used to model coupon acceptance, determining the optimal K value. Visualizations and presentation slides were created to highlight key insights from the analysis.
              </p>
            </div>
        </div>

        <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/ImageClassificationOnHandwrittenDigitsMulticlassClassification" target="_blank" rel="noopener noreferrer">
              <img src={digits} alt="Digits" className='fieldImg' />
            </a>
            <div className='fieldText' data-aos="fade-up">
              <h2>Image Classification On Handwritten Digits Using Multiclass Classification</h2>
              <p>
              This project involved implementing image classification on the MNIST handwritten digits dataset using a two-layer neural network. The model incorporated loss functions, gradients, and optimizers to train effectively. Through multiclass classification, the network was able to distinguish between 10 digits (0-9) using 60,000 training images and 10,000 test images. Pandas was used for data manipulation, Matplotlib for visualization, and Numpy for numerical operations, with iterative optimization and model refinement improving classification accuracy. The project demonstrated proficiency in machine learning and neural network frameworks.
              </p>
            </div>
        </div>

        <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/LogisticRegressionOnBreastCancerDataSet" target="_blank" rel="noopener noreferrer">
              <img src={log} alt="Logistic Regression" className='fieldImg' />
            </a>
            <div className='fieldText' data-aos="fade-up">
              <h2>Logistic Regression on Breast Cancer Data Set</h2>
              <p>
              This project involved applying logistic regression on the Wisconsin breast cancer dataset to classify cells as benign or malignant. Utilizing sklearn's LogisticRegression and a custom-built gradient descent optimizer, the model improved diagnostic accuracy by leveraging features from fine needle aspiration samples. The work demonstrated proficiency in machine learning and data analysis techniques.
              </p>
            </div>
        </div>

        <div className='field' data-aos="fade-up">
            <a href="https://github.com/echou024/PCAForDimensionalityReduction" target="_blank" rel="noopener noreferrer">
              <img src={pca} alt="PCA" className='fieldImg' />
            </a>
            <div className='fieldText' data-aos="fade-up">
              <h2>PCA For Dimensionality Reduction</h2>
              <p>
              This project implemented K-means for clustering and Principal Component Analysis (PCA) for dimensionality reduction on a dataset. K-means was used for image segmentation and quantization, enhancing image analysis. PCA, computed via Singular Value Decomposition (SVD), visualized data variance and feature importance. The LFW ("Labeled Faces in the Wild") dataset was utilized to demonstrate the effectiveness of these techniques for clustering and dimensionality reduction.
              </p>
            </div>
        </div>


      </div>







      {/* Extracurriculars */}
      <span className='sections' data-aos="fade-up"><b>Extracurriculars:</b></span>
      <div className='fields'>
        <div className='field' data-aos="fade-up">
          <img src={aisc} alt="AISC Logo" className='fieldImg' />
          <div className='fieldText' data-aos="fade-up">
            <h2>Vice President of Innovation - Artificial Intelligence Student Collective (AISC)</h2>
            <ul>
              <li>Lead a multi-sector team to establish UCR's first AI literacy initiative, gaining over 300+ members in 1 year.</li>
              <li>Developed and managed AI project curriculums covering topics like natural language processing, computer vision, and AI ethics, benefiting over 100+ students across 8-week programs.</li>
              <li>Published weekly Substack newsletters on AI news, career events, and internships for 200+ subscribers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;

