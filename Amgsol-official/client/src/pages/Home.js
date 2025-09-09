import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Process from '../components/Process';
import CallToAction from '../components/CallToAction';
import Trial from '../components/Trial';
import Testimonials from '../components/Testimonials';
import '../styles/global.css';  // ✅ import CSS here

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Process />
      <CallToAction />
      <Testimonials />
    </div>
  );
};

export default Home;
