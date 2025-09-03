import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Career from './pages/Career';
import Insights from './pages/Insights';
import ResidentialCommercialIndustrial from './pages/ResidentialCommercialIndustrial'; // ✅ updated import
import PortfolioServices from './pages/PortfolioServices';
import Contact from './pages/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-us/message-from-president-ceo" element={<About />} />
          <Route path="/about-us/management-policy-strategy" element={<About />} />
          <Route path="/about-us/our-vision-and-mission" element={<About />} />

          {/* ✅ Services section */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential-commercial-industrial" element={<ResidentialCommercialIndustrial />} /> 
          <Route path="/services/portfolio-investors-om-companies" element={<PortfolioServices />} />

          <Route path="/career" element={<Career />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
