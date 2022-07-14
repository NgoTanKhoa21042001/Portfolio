/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testomonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/khoatann214/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/MrKhoa98947757">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
