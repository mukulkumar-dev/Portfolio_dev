import React from 'react';
import "../styles/About.css";
import { motion } from "framer-motion";
import About_Image from '../images/Me.jpg';

const About = () => {  
  const horizontal = {
    x: 0, 
    opacity: 1, 
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  };

  return (
    <>
      <div className="about" id='about'>
        <div className="container">
          <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} viewport={{ once: true }} className="heading">
            <p className="heading-sub-text">Who I am</p>
            <p className='heading-text'>About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className="about-content">
              <p>
I'm a highly motivated Software Developer 💻 & Machine Learning Enthusiast 🤖 with a strong command of Java, Node.js, React.js, and database systems like MySQL and MongoDB

. I'm passionate about building efficient and user-friendly applications, demonstrated by my work on full-stack projects like the EduVerse Blogging Platform ✍️ and the Gemini SwiftChat AI chatbot 💬. My experience includes developing a User Management Dashboard with real-time stock insights 📈 during my internship at Bluestock Fintech Company, where I optimized API calls and improved UI performance. !</p>
              <br />
              <p>I'm also skilled in machine learning, with experience in building recommendation systems 📚 and analyzing datasets using tools like Pandas, NumPy, and Scikit-Learn

. I'm committed to continuous learning, holding certifications in Machine Learning, Cybersecurity, and Data Visualization. With a focus on problem-solving 💡, teamwork 🤝, and effective communication, I strive to deliver impactful solutions and thrive in collaborative environments.   


Sources and related content
.</p>
            </motion.div>
            <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className='about-img'>
              <img src={About_Image} alt="Profile" className="circular-img" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
