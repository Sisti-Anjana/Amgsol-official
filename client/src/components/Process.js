import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartLine, faTools, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import processImg from '../assets/process.webp';
import './Process.css';

const Process = () => {
  return (
    <motion.section
      className="process-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">
        Work Flow <span className="highlight">Process</span>
      </h2>

      <div className="process-layout">
        {/* Left Column */}
        <div className="left-column">
          <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
            <div className="process-card-inner">
              <FontAwesomeIcon icon={faBell} className="icon-logo" />
              <div>
                <h4>Proactive Monitoring And Alerting</h4>
                <p>
                  Implementing proactive monitoring and alerting systems to ensure
                  continuous optimization and peak performance of solar power
                  systems at American Green Solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
            <div className="process-card-inner">
              <FontAwesomeIcon icon={faChartLine} className="icon-logo" />
              <div>
                <h4>Status Update and Reporting</h4>
                <p>
                  Providing transparent and timely status updates and comprehensive
                  reporting mechanisms, we ensure our clients stay informed and
                  empowered in their pursuit of sustainable energy solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center Image */}
        <div className="center-image">
          <img src={processImg} alt="Workflow process" />
        </div>

        {/* Right Column */}
        <div className="right-column">
          <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
            <div className="process-card-inner">
              <FontAwesomeIcon icon={faTools} className="icon-logo" />
              <div>
                <h4>Root Cause Analyses and Permanent Fixes</h4>
                <p>
                  Conducting thorough root cause analyses and implementing permanent
                  fixes, we strive for continual improvement, resilience, and reliability
                  in our solar monitoring solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="process-card" whileHover={{ scale: 1.05 }}>
            <div className="process-card-inner">
              <FontAwesomeIcon icon={faFileAlt} className="icon-logo" />
              <div>
                <h4>Service Request & Documentation</h4>
                <p>
                  Efficiently managing service requests and meticulous documentation to
                  prioritize client satisfaction and communication excellence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;