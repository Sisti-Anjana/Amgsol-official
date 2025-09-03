import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaIndustry, FaBolt, FaChartLine } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaHome className="icon" />,
      title: 'Streamlined Information',
      text: 'While there are many tools available for analyzing energy data, we stand out by providing a simple and centralized solution.'
    },
    {
      icon: <FaIndustry className="icon" />,
      title: 'Expertise in Large Energy Plants',
      text: 'We understand the unique challenges faced by businesses with large estates and extensive physical assets that consume significant amounts of energy.'
    },
    {
      icon: <FaBolt className="icon" />,
      title: 'Real-Time Performance Insights',
      text: 'This real-time visibility enhances decision-making, allowing you to optimize energy production and ensure continuous peak performance.'
    },
    {
      icon: <FaChartLine className="icon" />,
      title: 'Data-Driven Analytics',
      text: 'Harness the power of innovation and analytics to maximize the value of your solar energy assets.'
    }
  ];

  return (
    <section className="features">
      <motion.div
        className="features-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h5 className="sub-title">Best Things of Us</h5>
        <h2 className="title">
          Why You <span>Choose Us</span>
        </h2>
        <p className="desc">
          Elevate your solar plant's performance with our cutting-edge monitoring
          and analysis services. At American Green Solutions, our team of seasoned
          experts harnesses the power of advanced technology and data analytics to
          meticulously optimize your solar plant's efficiency. We understand that
          every solar project is unique, which is why our services are tailored to
          meet your specific needs. By choosing us, you are ensuring that your solar
          plant operates at peak performance, yielding maximum energy output while
          minimizing operational costs. Trust in our expertise to provide you with
          confidence in the efficient and cost-effective operation of your solar
          investment.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {feature.icon}
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
