import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <motion.section
      className="about-us"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Our Essence</h2>
      <h3>Who We Are</h3>
      <p>Welcome to American Green Solutions, where innovation, excellence, and a commitment to sustainable energy define who we are. As the President of American Green Solutions, I am proud to lead a team with a shared vision: to be pioneers in transforming the solar energy landscape. Our identity is rooted in a passion for innovation, a dedication to high-quality solar monitoring solutions, and an unwavering commitment to outstanding customer service.</p>
      <div className="subsections">
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Innovators in Solar Monitoring</h4>
          <p>Our journey begins with a dedication to innovation. At American Green Solutions, we invest in cutting-edge technology and employ strategic methodologies to position our solar monitoring solutions at the forefront of the industry. We believe in setting new standards and exceeding expectations.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Optimizing Energy Performance</h4>
          <p>Recognizing the critical role of solar monitoring in energy optimization, our team is driven to maximize the potential of your solar power system. Through advanced technology and a focus on efficiency, we strive to enhance energy performance and contribute to a more sustainable future.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Customer-Centric Approach</h4>
          <p>Exceptional customer service is the heart of our identity. We understand that successful partnerships are built on transparency, responsiveness, and proactive communication. At American Green Solutions, we are committed to delivering outstanding customer service, ensuring your satisfaction and peace of mind.</p>
        </motion.div>
        <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <h4>Your Partner in Sustainability</h4>
          <p>Choosing American Green Solutions means partnering with a team genuinely passionate about sustainable energy. We are not just providers of solar monitoring solutions; we are collaborators dedicated to your success. Together, let's harness the power of solar energy to create a brighter and more sustainable future.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;