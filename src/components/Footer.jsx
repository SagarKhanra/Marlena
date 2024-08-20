import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import logo2 from "../asset/logo2.png";


const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="social-media">
          <a href="/" target="_blank" rel="noopener noreferrer">
          <TiSocialFacebook />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
          <RiTwitterXFill />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
          <ImPinterest2 />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
          <AiOutlineYoutube />
          </a>
        </div>
        <div className='logo2'>
          <img src={logo2} alt='logo2' />
        </div>
        <div className="copyright">
          <p>
            © 2023. All Rights Reserved.{' '}
            <a href="/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            . Created with Leadpages
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
