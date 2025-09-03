import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <motion.section
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Products & Solutions</h2>
      <div className="service-grid">
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Commercial, Industrial, and Residential Sectors</h4>
          <p>Elevate Your Business: We function as a seamless addition to your team. <Link to="/residential-commercial-industrial#EYB">Read more</Link></p>
          <p>Drive Cost Efficiency: Expand your asset base without increasing resource allocation. <Link to="/residential-commercial-industrial#DCE">Read more</Link></p>
          <p>Simplify Reporting Processes: Reclaim your valuable time with effortless access to centralized reporting. <Link to="/residential-commercial-industrial#SRP">Read more</Link></p>
          <p>AGS Performance Assurance: Concentrate on driving new business ventures while AGS takes care of your performance. <Link to="/residential-commercial-industrial#APA">Read more</Link></p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Portfolio Investors / O&M Companies</h4>
          <p>Optimize Your Returns: Ensuring the peak performance of your solar assets. <Link to="/portfolio-investors-om-companies#OYR">Read more</Link></p>
          <p>Enhance Performance Transparency: Our cutting-edge technology provides clear insights. <Link to="/portfolio-investors-om-companies#EPT">Read more</Link></p>
          <p>24/7 Intelligent Issue Detection: Our technology forecasts energy issues proactively. <Link to="/portfolio-investors-om-companies#IID">Read more</Link></p>
          <p>Root Cause Diagnostics: Identify and resolve issues in complex solar operations. <Link to="/portfolio-investors-om-companies#RCD">Read more</Link></p>
          <p>5-Star Client Satisfaction: Our proactive support ensures top-rated service. <Link to="/portfolio-investors-om-companies#SCS">Read more</Link></p>
          <p>Mitigate Unproductive Investments: Prevent losses from underperforming assets. <Link to="/portfolio-investors-om-companies#MUI">Read more</Link></p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;