import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCity: '',
    organisation: '',
    designation: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.countryCity.trim()) newErrors.countryCity = 'Country - City is required';
    if (!formData.organisation.trim()) newErrors.organisation = 'Organisation Name is required';
    if (!formData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10 || formData.description.length > 300) {
      newErrors.description = 'Description must be between 10 and 300 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const submissionData = {
      ...formData,
      date: new Date().toISOString(),
    };

    try {
      // Submit contact form to the enhanced endpoint
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit contact form');
      }

      setStatus('✅ Message sent successfully! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCity: '',
        organisation: '',
        designation: '',
        description: ''
      });
      setErrors({});

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);

    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus(`❌ Error sending message: ${error.message}. Please try again.`);
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.section
      className="contact-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="contact-form-container">
        <h2>Request A Quote</h2>
        <p className="contact-subtitle">Fill out the form below to get in touch with our team.</p>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="countryCity"
              placeholder="Your Country - City"
              value={formData.countryCity}
              onChange={handleChange}
              className={errors.countryCity ? 'error' : ''}
            />
            {errors.countryCity && <span className="error-message">{errors.countryCity}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="organisation"
              placeholder="Organisation Name"
              value={formData.organisation}
              onChange={handleChange}
              className={errors.organisation ? 'error' : ''}
            />
            {errors.organisation && <span className="error-message">{errors.organisation}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="designation"
              placeholder="Your Designation"
              value={formData.designation}
              onChange={handleChange}
              className={errors.designation ? 'error' : ''}
            />
            {errors.designation && <span className="error-message">{errors.designation}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="description"
              placeholder="Describe your requirements (10-300 characters)"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? 'error' : ''}
            ></textarea>
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>
          <button type="submit">Submit Request</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;