import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserTie, FaChartPie, FaEye, FaBolt, FaLeaf, FaHandsHelping, FaStar, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import presidentImage from '../assets/shiva.jpg';
import ceoImage from '../assets/shree.jpg';
import managementImage from '../assets/TEAM management.png';
import './About.css';

const About = () => {
  const location = useLocation();
  const isMessage = location.pathname === '/about-us/message-from-president-ceo';
  const isManagement = location.pathname === '/about-us/management-policy-strategy';
  const isVision = location.pathname === '/about-us/our-vision-and-mission';

  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {isMessage || isManagement || isVision ? (
        <>
          {/* ---------- President & CEO Message ---------- */}
          {isMessage && (
            <>
              <div className="message-president-content">
                <div className="image-container">
                  <img src={presidentImage} alt="President" className="president-image" />
                  <div className="president-name">Siva Yarramsetty</div>
                </div>
                <div className="content-text">
                  <h2>Message from President</h2>
                  <p>
                    American Green Solutions strongly values the clarity of vision and precision in decision-making to drive progress. We remain committed to embodying the rich spirit of America's diversity by seamlessly integrating the best from all corners of the world. Our workplace and workforce are dedicated to reflecting the authentic American spirit in everything we undertake and accomplish.
                  </p>
                  <p>
                    Within our ranks, we are privileged to have the best talents from across the globe, each flourishing and contributing to their utmost potential, propelling AGS to new heights. The leadership at American Green Solutions LLC adopts an unwavering pro-growth approach, fostering positive development for employees, clients, associates, and shareholders alike.
                  </p>
                  <p>
                    On behalf of the entire American Green Solutions LLC. team, I extend heartfelt gratitude to our valued customers, trusted vendors, dedicated employees, and supportive well-wishers. Your perennial support and guidance have played a crucial role in making us a top choice for associations. Thank you for being an integral part of our success story.
                  </p>
                  <h4>— President, American Green Solutions</h4>
                </div>
              </div>
              <div className="message-ceo-footer">
                <div className="image-container">
                  <img src={ceoImage} alt="CEO" className="ceo-image" />
                  <div className="ceo-name">Shree Yarramsetty</div>
                </div>
                <div className="content-text">
                  <h2>Message from CEO</h2>
                  <p>
                    Welcome to American Green Solutions! As the CEO, I extend a warm greeting, emphasizing our commitment to revolutionizing the solar energy landscape through unwavering excellence and innovative solutions. Recognizing the pivotal role of solar monitoring in optimizing energy performance, we proudly offer top-tier solutions.
                  </p>
                  <p>
                    Our promise is to ensure your solar power system operates at peak efficiency, achieved through cutting-edge technology. What truly differentiates us is our dedicated focus on delivering exceptional customer service. This commitment is deeply rooted in our values, with our team actively being responsive, transparent, and proactive to meet your needs, making your satisfaction our top priority.
                  </p>
                  <p>
                    Choosing American Green Solutions is more than acquiring solar monitoring solutions; it symbolizes establishing a partnership with a team passionate about sustainable energy and dedicated to your success. Together, let's unlock the full potential of your solar power system for a greener, more sustainable future. We express sincere gratitude for considering American Green Solutions as your trusted partner.
                  </p>
                  <p>
                    Warm regards, and thank you for providing us with the opportunity to serve you with dedication and expertise, advancing your sustainable energy goals. With a proven history of successful collaborations, American Green Solutions is ready to guide you towards a brighter, cleaner, and more sustainable energy future.
                  </p>
                  <h4>— CEO, American Green Solutions</h4>
                </div>
              </div>
            </>
          )}

          {/* ---------- Management Policy & Strategy ---------- */}
          {isManagement && (
            <div className="management-content">
              <h2>Management Policy & Strategy</h2>
              <div className="policy-section">
                <h3>Company Culture</h3>
                <div className="policy-icon"><FaUsers /></div>
                <p>
                  American Green Solutions places a strong emphasis on fostering a robust company culture that serves as the
                  foundation for cultivating effective leaders and engaged employees. This culture is built on principles of
                  diversity, inclusion, and mutual respect, creating an environment where every individual can thrive.
                </p>
              </div>
              <div className="policy-section">
                <h3>Team Management Strategies</h3>
                <div className="policy-icon"><FaChartLine /></div>
                <p>
                  Our team management strategies are designed to promote a dynamic and adaptive workforce. We implement
                  comprehensive training programs to equip employees with the latest industry knowledge and skills, enabling
                  them to respond effectively to evolving market trends.
                </p>
              </div>
              <div className="policy-section">
                <h3>Commitment to Excellence</h3>
                <div className="policy-icon"><FaShieldAlt /></div>
                <p>
                  At the core of our strategy is an unwavering commitment to excellence in all aspects of our operations. We
                  deploy state-of-the-art technology to provide high-quality solar monitoring solutions that optimize energy
                  performance and reliability.
                </p>
              </div>
              <div className="management-image-container">
                <img src={managementImage} alt="Management Team" className="management-image" />
                <p className="image-caption">Our Dedicated Management Team</p>
              </div>
            </div>
          )}

          {/* ---------- Vision & Mission ---------- */}
          {isVision && (
            <div className="vision-content">
              <h2>Our Vision and Mission</h2>
              <p>
                At American Green Solutions, our vision is to lead the transformation of the solar energy landscape through
                innovation and excellence. Our mission is to provide cutting-edge solar monitoring solutions that optimize
                energy performance, reduce carbon footprints, and foster sustainable practices.
              </p>

              <div className="grid">
                <div>
                  <FaBolt />
                  <h3>Cutting-Edge Solutions</h3>
                  <p>
                    Leveraging advanced solar monitoring technology to deliver innovative, reliable, 
                    and scalable energy solutions for all clients. We continuously invest in research 
                    and development to stay ahead, ensuring our offerings meet the evolving needs 
                    of the renewable energy sector.
                  </p>
                </div>
                <div>
                  <FaLeaf />
                  <h3>Optimizing Energy Performance</h3>
                  <p>
                    Ensuring solar systems operate at maximum efficiency, reducing energy waste, 
                    and promoting sustainability worldwide. Our solutions include real-time analytics 
                    to enhance performance, supporting a greener planet for future generations.
                  </p>
                </div>
                <div>
                  <FaStar />
                  <h3>Outstanding Customer Service</h3>
                  <p>
                    Providing responsive, transparent, and dedicated customer support that prioritizes 
                    client satisfaction above all. Our team is available 24/7 to address your needs, 
                    ensuring a seamless and supportive experience every step of the way.
                  </p>
                </div>
                <div>
                  <FaHandsHelping />
                  <h3>Partnering for Success</h3>
                  <p>
                    Building long-term partnerships with clients to achieve shared goals and create 
                    a greener future together. We collaborate closely, offering customized strategies 
                    that align with your vision for a sustainable and prosperous tomorrow.
                  </p>
                </div>
              </div>

              <div className="mission-section">
                <h2>Our Mission</h2>
                <h3>Solar Excellence Redefined</h3>
                <p>
                  At American Green Solutions, we are driven by a bold mission to redefine solar excellence. We deliver
                  state-of-the-art solar monitoring, performance analytics, and operational maintenance solutions that empower
                  a sustainable energy future. Our commitment is to maximize solar efficiency, surpass industry benchmarks, and
                  cultivate a greener planet. With a focus on exceptional service and transparent collaboration, we forge
                  lasting client partnerships, guiding them toward a thriving, eco-conscious tomorrow powered by solar
                  innovation.
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h2>
            About <span className="highlight">Us</span>
          </h2>
          <p>
            Explore the foundation and vision of American Green Solutions, where innovation and sustainability drive our
            mission.
          </p>

          <div className="subsections">
            <motion.div className="card" initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <NavLink to="/about-us/message-from-president-ceo" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaUserTie className="icon" />
                <h4>Message from President & CEO</h4>
              </NavLink>
            </motion.div>

            <motion.div className="card" initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <NavLink to="/about-us/management-policy-strategy" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaChartPie className="icon" />
                <h4>Management Policy & Strategy</h4>
              </NavLink>
            </motion.div>

            <motion.div className="card" initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
              <NavLink to="/about-us/our-vision-and-mission" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaEye className="icon" />
                <h4>Our Vision and Mission</h4>
              </NavLink>
            </motion.div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default About;