import React from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";
import { SkillsData } from "../data/SkillsData";

const Skills = () => {
    const skillEffect = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.4,
        },
    };

    return (
        <>
            <div className='skills' id='skills'>
                <div className='container'>
                    <motion.div
                        whileInView={skillEffect}
                        initial={{ y: "-80px", opacity: 0 }}
                        className='heading'>
                        <p className='heading-sub-text'>What I work with</p>
                        <p className='heading-text'>My Skills</p>
                    </motion.div>
                    <motion.div
                        whileInView={skillEffect}
                        className='skills-box skills-card'
                        initial={{ y: "-30px", opacity: 0 }}>
                        {SkillsData.map((el, index) => (
                            <motion.div // Changed div to motion.div
                                key={index}
                                className='skill-card'
                                whileHover={{ // Added whileHover animation
                                    y: -10,
                                    scale: 1.05,
                                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                                }}
                                transition={{ duration: 0.2 }} // Smooth transition
                            >
                                <div className='skill-icon'>{el.icon}</div>
                                <small className='skill-desc'>{el.name}</small>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Skills;