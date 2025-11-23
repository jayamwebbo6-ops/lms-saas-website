import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">LMSS SaaS</h2>
          <p>
            A powerful, modern LMS for institutes to manage classes, teachers,
            tests, and online exams effortlessly.
          </p>

          <div className="footer-social">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div className="footer-col">
          <h3>Solutions</h3>
          <ul>
            <li>Schools</li>
            <li>Colleges</li>
            <li>Coaching Institutes</li>
            <li>Online Tutors</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@lmss-saas.com</li>
    
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LMSS SaaS. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
