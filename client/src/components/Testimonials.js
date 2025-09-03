import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

// Import images (place them inside src/assets/testimonials/)
import brettImg from '../assets/per1.jpg';
import nickImg from '../assets/pers2.jpg';
import michaelImg from '../assets/pers3.jpg';

const testimonials = [
  {
    img: brettImg,
    name: 'Brett C',
    title: 'Vice President of Operations',
    text: `Most of the vendors in this space offer only weekday monitoring that ends with sunset. 
    At AGS, I was provided with Weekday, Weekend, Overnight monitoring that elevated our operational efficiency beyond industry standards.`,
    rating: 5,
  },
  {
    img: nickImg,
    name: 'Nick M',
    title: 'Operations Manager',
    text: `AGS has an advantage in the Solar O&M space with their exceptional customer experience and after sales response. 
    The swift responses to our last-minute requests and the professional team who jumped right into the job made our lives easier.`,
    rating: 5,
  },
  {
    img: michaelImg,
    name: 'Michael D',
    title: 'ROCC Manager',
    text: `Working alongside AGS has been an absolute pleasure, considering that the AGS team serves as my company's monitoring team 
    for both daytime and overnight operations. AGS consistently demonstrates attentiveness to our requirements.`,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="testimonials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>
        What People <span className="highlight">Say About Us</span>
      </h2>
      <p className="subtitle">
        Solar Success Stories: Unveiling the Radiant Reviews that Illuminate Our Energy Revolution
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="testimonial-header">
              <img src={item.img} alt={item.name} className="testimonial-img" />
            </div>
            <h4>{item.name}</h4>
            <p className="title">{item.title}</p>
            <p className="review">"{item.text}"</p>
            <div className="stars">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
