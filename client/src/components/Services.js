import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaBuilding, FaIndustry } from "react-icons/fa";
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import "./Services.css";

const Services = () => {
  const location = useLocation();
  const isResidential = location.pathname === "/services/residential";
  const isCommercial = location.pathname === "/services/commercial";
  const isIndustrial = location.pathname === "/services/industrial";

  return (
    <motion.section
      className="services"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isResidential || isCommercial || isIndustrial ? (
        <>
          {/* ---------- Residential ---------- */}
          {isResidential && (
            <div className="service-content">
              <h2>Residential Services</h2>
              <p>
                We provide high-quality solar monitoring and maintenance for
                residential clients, ensuring peak efficiency, energy savings,
                and long-term system reliability.
              </p>
            </div>
          )}

          {/* ---------- Commercial ---------- */}
          {isCommercial && (
            <div className="service-content">
              <h2>Commercial Services</h2>
              <p>
                Our commercial solar services are designed to drive cost
                efficiency and sustainability, with predictive maintenance and
                performance monitoring tailored for businesses.
              </p>
            </div>
          )}

          {/* ---------- Industrial ---------- */}
          {isIndustrial && (
            <div className="service-content">
              <h2>Industrial Services</h2>
              <p>
                We deliver large-scale industrial solar management with robust
                uptime, simplified reporting, and preventive maintenance to
                maximize energy output and reduce downtime.
              </p>
            </div>
          )}
        </>
      ) : (
        <>
          <h2>
            Residential – Commercial –{" "}
            <span className="highlight">Industrial</span>
          </h2>
          <p className="intro-text">
            Explore our specialized solar services designed for different
            sectors. Click a card below to learn more.
          </p>

          <div className="subsections">
            <motion.div
              className="card"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-image">
                <img src={service1} alt="Residential Services" />
                <div className="service-overlay">
                  <FaHome className="icon" />
                </div>
              </div>
              <NavLink
                to="/services/residential"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h4>Residential</h4>
              </NavLink>
            </motion.div>

            <motion.div
              className="card"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-image">
                <img src={service2} alt="Commercial Services" />
                <div className="service-overlay">
                  <FaBuilding className="icon" />
                </div>
              </div>
              <NavLink
                to="/services/commercial"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h4>Commercial</h4>
              </NavLink>
            </motion.div>

            <motion.div
              className="card"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="service-image">
                <img src={service3} alt="Industrial Services" />
                <div className="service-overlay">
                  <FaIndustry className="icon" />
                </div>
              </div>
              <NavLink
                to="/services/industrial"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h4>Industrial</h4>
              </NavLink>
            </motion.div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Services;