import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <h3>Get your vibe on!</h3>
        </div>
        <div className="footer-content">
          <div className="footer-content-card">
            <h4>Your Account</h4>
            <ul>
              <li>Login</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Socials</h4>
            <ul>
              <li>Twitter: @BenDev_254</li>
              <li>LinkedIn: Ben Macharia</li>
              <li>Medium: Ben Macharia</li>
            </ul>
          </div>
          <div className="footer-content-card">
            <h4>Contacts</h4>
            <ul>
              <li>Email: wrkthedream@gmail.com</li>
              <li>Phone: +254 798511798</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <p>© 2023 Vibu. All rights reserved.</p>
            </div>
      </div>
    </div>
  );
};

export default Footer;