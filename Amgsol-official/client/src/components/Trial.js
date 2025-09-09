import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Trial.css';
import bgImage from '../assets/bg.jpg'; // your background image

const Trial = () => {
  return (
    <motion.section
      className="trial"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="trial-card">
        <h2>Enjoy a Free 45-Day Trial of Our Services</h2>
        <p>
          Monitor, report, and analyze the performance of single-site solar plants
          up to 1 MW for 45 days in accordance with your SOPs.
        </p>
        <Link to="/contact">
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(67, 160, 71, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Request A Quote
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Trial;
