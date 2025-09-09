import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaArrowRight, FaCalculator } from 'react-icons/fa';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Optimize Your Solar Performance?</h2>
          <p>Join thousands of satisfied customers who've maximized their solar plant efficiency with our advanced monitoring and analysis solutions. Get your comprehensive performance assessment today.</p>
          
          <div className="cta-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="cta-primary">
                <FaCalculator />
                Get Analysis Report
                <FaArrowRight className="arrow-icon" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+1234567890" className="cta-secondary">
                <FaPhone />
                Call Now: (123) 456-7890
              </a>
            </motion.div>
          </div>
          
          <div className="cta-features">
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Comprehensive Analysis</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Expert Monitoring</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Performance Reports</span>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CallToAction;
