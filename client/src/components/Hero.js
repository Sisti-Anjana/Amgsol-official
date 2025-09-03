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
      heading: 'Optimize Solar Performance with Real-Time Monitoring',
      text: 'Leverage our advanced solar monitoring tools to track performance, detect issues, and maximize energy output.',
    },
    {
      image: solar1,
      heading: 'Drive Sustainability with Green Solutions',
      text: 'Partner with American Green Solutions to reduce your carbon footprint and achieve sustainable energy goals.',
    },
    {
      image: solar4,
      heading: 'Empower Your Business with Digital Innovation',
      text: 'Our cutting-edge digital solutions streamline solar operations, reduce costs, and enhance efficiency.',
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

      <motion.img
        src={image}
        alt="American Green Solutions Logo"
        className="hero-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1>{slides[currentSlide].heading}</h1>
      <p>{slides[currentSlide].text}</p>
      <Link to="/contact">
        <button className="cta-button">Get a Quote</button>
      </Link>
    </motion.section>
  );
};

export default Hero;
