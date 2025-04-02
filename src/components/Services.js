import React from 'react';
import "../styles/Services.css";
import { motion } from "framer-motion";

// Import your images
import BluestockLogo from '../images/BlueStock Certificate.jpg'; // Replace with your actual image path
import AdiFoundationLogo from '../images/Adi Foundation Certificate.jpg'; // Replace with your actual image path
import JovacLogo from '../images/JOVAC Certificate_page-0001.jpg'; // Replace with your actual image path

const Services = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    }

    return (
        <>
            <div className="services" id='services'>
                <div className="container">
                    <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
                        <p className="heading-sub-text">What I do</p>
                        <p className='heading-text'>Internship</p>
                    </motion.div>
                    <motion.div className="services-box" whileInView={fade} initial={{ opacity: 0 }}>
                        <div className="services-card">
                            <div className="services-image-container">
                                <img src={BluestockLogo} alt="Bluestock Fintech Company" className='services-image' />
                            </div>
                            <p className='services-title'>Bluestock Fintech Company Pvt. Ltd.</p>
                            <p className='services-desc'>As an SDE Intern at Bluestock Fintech Company, I developed a User Management Dashboard with real-time stock insights and role-based access control.</p>
                        </div>
                        <div className="services-card">
                            <div className="services-image-container">
                                <img src={AdiFoundationLogo} alt="Adi Foundation X Microsoft" className='services-image' />
                            </div>
                            <p className='services-title'>Adi Foundation X Microsoft</p>
                            <p className='services-desc'>A versatile developer with a strong foundation in both frontend and backend development, and an enthusiasm for exploring AI.</p>
                        </div>
                        <div className="services-card">
                            <div className="services-image-container">
                                <img src={JovacLogo} alt="JOVAC" className='services-image' />
                            </div>
                            <p className='services-title'>Job Valued Course By GLA University</p>
                            <p className='services-desc'>Python-based training in Machine Learning and Data Science, where I honed my abilities in data analysis and predictive modeling. </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Services;