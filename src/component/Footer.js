import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">React Development (RDN)</h2>
          <p>RDN PVT LTD </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> &nbsp; +123-456-7890
            </span>
            <span>
              <i className="fas fa-envelope"></i> &nbsp; maheshbhor97@gmail.com
            </span>
          </div>
          <div className="socials">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul className="flex justify-center  m-2 ">
            <li className="pr-5">
              <Link to="/milkVilla">Home</Link>{" "}
            </li>
            <li className="pr-5">
              <Link to="/about">About</Link>
              {/* <a href="#">About</a> */}
            </li>
            <li className="pr-5">
              <Link to="/services"> Services</Link>
            </li>
            <li className="pr-5">
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>

        {/* <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" placeholder="Your email address..." required />
            <textarea placeholder="Your message..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div> */}
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} RDN | Designed by RDN
      </div>
    </footer>
  );
};

export default Footer;
