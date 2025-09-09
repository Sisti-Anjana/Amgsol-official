import React from 'react';
import { motion } from 'framer-motion';
import { FaSolarPanel, FaLeaf, FaUsers, FaAward } from 'react-icons/fa';
import './Stats.css';

const Stats = () => {
  const stats = [
    {
      icon: <FaSolarPanel className="stat-icon" />,
      number: '500+',
      label: 'Solar Plants Analyzed',
      description: 'Comprehensive performance analysis across residential, commercial, and industrial sectors'
    },
    {
      icon: <FaLeaf className="stat-icon" />,
      number: '50MW+',
      label: 'Solar Capacity Monitored',
      description: 'Real-time monitoring and optimization of solar plant performance'
    },
    {
      icon: <FaUsers className="stat-icon" />,
      number: '1000+',
      label: 'Satisfied Customers',
      description: 'Building long-term relationships through expert analysis and insights'
    },
    {
      icon: <FaAward className="stat-icon" />,
      number: '15+',
      label: 'Years of Excellence',
      description: 'Leading innovation in solar performance monitoring and analytics'
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Powering Success with <span className="highlight">Proven Results</span></h2>
          <p>Our track record speaks for itself - delivering exceptional solar solutions that make a real impact</p>
        </motion.div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
