import React from "react";
import "./Footer.css";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Contact Info */}
        <div className="footer-col">
          <h4 className="footer-title">Get In Touch</h4>
          <p>
            <FaPhoneAlt className="footer-icon" />
            <a href="tel:+16302995174">+1 630-299-5174</a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:info@amgsol.com">info@amgsol.com</a>
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Naperville+IL+60563,+USA" 
              target="_blank" rel="noopener noreferrer"
            >
              Naperville IL 60563, USA
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4 className="footer-title">Join Our Social Community</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/people/Libsys-Inc/100066298346924/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/amgsolllc" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/amgsolllc" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/americangreensolutions24/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="footer-col">
          <h4 className="footer-title">Let’s Discuss What’s Next</h4>
          <p>
            Have a project or a question?<br />
            We’d love to hear from you.
          </p>
          <a href="/contact" className="footer-link">Contact Us →</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 American Green Solutions. All Rights Reserved.</p>
        <a href="/privacy" className="footer-privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
