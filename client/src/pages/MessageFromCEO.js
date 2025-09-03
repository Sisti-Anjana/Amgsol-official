import React from 'react';
import { motion } from 'framer-motion';
import './MessageFromCEO.css';

const MessageFromCEO = () => {
  return (
    <motion.section
      className="message-ceo"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Message from President & CEO</h2>
      <div className="ceo-content">
        <p>
          At American Green Solutions, we are driven by a vision that extends
          beyond providing solar monitoring solutions. Our mission is to
          contribute meaningfully to a greener planet by delivering technology
          that empowers individuals and organizations to harness renewable
          energy efficiently.
        </p>
        <p>
          As President & CEO, I am committed to ensuring that every innovation
          we pursue aligns with sustainability, reliability, and customer
          satisfaction. We believe in creating not just energy solutions, but a
          movement toward a brighter, cleaner future.
        </p>
        <p>
          Together with our dedicated team, partners, and customers, we stand
          ready to redefine the solar industry and build a future powered by
          clean energy.
        </p>
        <h4>— President & CEO, American Green Solutions</h4>
      </div>
    </motion.section>
  );
};

export default MessageFromCEO;
