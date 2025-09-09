import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import solar3 from '../assets/solar3.jpg';
import solar1 from '../assets/solar1.jpg';
import solar4 from '../assets/solar4.jpg';
import image from '../assets/image.png';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      image: solar3,
      heading: 'Optimize Solar Performance with Advanced Analytics',
      text: 'Join 1000+ satisfied customers maximizing their solar plant efficiency with our comprehensive monitoring and analysis solutions.',
      cta: 'Get Analysis'
    },
    {
      image: solar1,
      heading: 'Real-Time Solar Plant Monitoring',
      text: 'Professional solar performance analysis, predictive maintenance insights, and comprehensive reporting for optimal operations.',
      cta: 'Learn More'
    },
    {
      image: solar4,
      heading: '50MW+ Solar Plants Analyzed',
      text: 'Proven expertise in solar performance optimization. Advanced monitoring, data analytics, and operational excellence.',
      cta: 'See Our Work'
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="carousel">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="carousel-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {slides[currentSlide].heading}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {slides[currentSlide].text}
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/contact">
            <button className="cta-button primary">{slides[currentSlide].cta}</button>
          </Link>
          <Link to="/insights">
            <button className="cta-button secondary">Learn More</button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
