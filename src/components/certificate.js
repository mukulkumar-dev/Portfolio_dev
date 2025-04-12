import React from 'react';
import "../styles/Certificate.css";
import { motion } from "framer-motion";

// Import your images
import Cisco from '../images/WhatsApp Image 2025-01-22 at 20.15.45_3eacebd1.jpg'; // Replace with your actual image path
import AIModel from '../images/MSQV6X7G0Z.png'; // Replace with your actual image path
import Data from '../images/Screenshot 2024-12-21 230544.png'; // Replace with your actual image path
import SixSigma from '../images/Screenshot 2025-04-02 234630.png';
import MongoDB from '../images/WhatsApp Image 2024-09-21 at 00.28.06_dcd0cb93.jpg';
import HPLab from '../images/HP Power Lab.jpg';

const Certificate = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    }

    return (
        <>
            <div className="certificates" id='certificates'>
                <div className="container">
                    <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
                        <p className="heading-sub-text">Where From </p>
                        <p className='heading-text'>Certifications</p>
                    </motion.div>
                    <motion.div className="certificates-box" whileInView={fade} initial={{ opacity: 0 }}>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={Cisco} alt="Introduction To Cybersecurity" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>Introduction To Cybersecurity</p>
                        </div>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={AIModel} alt="AI Model" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>Generative AI Model</p>
                        </div>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={Data} alt="JOVAC" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>Data Visualisation:Empowering The World</p>
                        </div>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={SixSigma} alt="JOVAC" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>Six Sigma White Belt</p>
                        </div>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={MongoDB} alt="JOVAC" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>Getting Started With MongoDB Atlas</p>
                        </div>
                        <div className="certificates-card">
                            <div className="certificates-image-container">
                                <img src={HPLab} alt="JOVAC" className='certificates-image' />
                            </div>
                            <p className='certificates-title certificate-title'>HP Power Lab </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Certificate;