import React from 'react';
import { motion } from 'framer-motion';
import './ResidentialServices.css';

const ResidentialServices = () => {
  return (
    <motion.section
      className="residential-services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Commercial, Industrial, and Residential Sectors</h2>
      <div className="service-grid">
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} id="EYB">
          <h4>Elevate Your Business</h4>
          <p>We function as a seamless addition to your team, providing tailored digital solutions to enhance your solar energy operations.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} id="DCE">
          <h4>Drive Cost Efficiency</h4>
          <p>Expand your asset base without increasing resource allocation, optimizing costs while maintaining high performance.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} id="SRP">
          <h4>Simplify Reporting Processes</h4>
          <p>Reclaim your valuable time with effortless access to centralized, real-time reporting for your solar assets.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} id="APA">
          <h4>AGS Performance Assurance</h4>
          <p>Concentrate on driving new business ventures while AGS takes care of your solar performance monitoring and optimization.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResidentialServices;