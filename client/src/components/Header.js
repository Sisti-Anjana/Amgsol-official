import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/image.png';
import './Header.css';

const Header = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container">
        <img src={logo} alt="American Green Solutions Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            <NavLink to="/about-us" onClick={(e) => e.preventDefault()}>
              About Us
            </NavLink>
            {isAboutDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/about-us/message-from-president-ceo">
                    Message from President & CEO
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us/management-policy-strategy">
                    Management Policy & Strategy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us/our-vision-and-mission">
                    Our Vision and Mission
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <NavLink to="/services" onClick={(e) => e.preventDefault()}>
              Services
            </NavLink>
            {isServicesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/services/residential-commercial-industrial">
                    Residential, Commercial & Industrial
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/portfolio-investors-om-companies">
                    Portfolio Investors & O&M Companies
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li><NavLink to="/career">Career</NavLink></li>
          <li><NavLink to="/insights">Insights</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;