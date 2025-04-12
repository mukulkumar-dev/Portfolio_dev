import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><a  href="" target='_blank' className='nav-link'><FaTwitter /></a></li>
        <li onClick={handleNav} ><a  href="https://www.linkedin.com/in/mukul-kumar-515a89249/" target='_blank' className='nav-link'><FaLinkedin /></a></li>
        <li onClick={handleNav} ><a  href="https://github.com/mukulkumar-dev/" target='_blank' className='nav-link'><BsGithub /></a></li>
  </ul>
  )
};

export default NavLinks;
