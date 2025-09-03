import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Process from '../components/Process';
import Trial from '../components/Trial';
import Testimonials from '../components/Testimonials';
import '../styles/global.css';  // ✅ import CSS here

const Home = () => {
  return (
    <div className="home">
      <Hero />
      {/* <About /> */}
      <Features />
      <Services />
      <Process />
      <Trial />
      <Testimonials />
    </div>
  );
};

export default Home;
