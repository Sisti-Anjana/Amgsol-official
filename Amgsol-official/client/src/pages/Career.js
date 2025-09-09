import React, { useState } from "react";
import "./Career.css";

const Career = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    jobTitle: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [showLearnMore, setShowLearnMore] = useState({});

  // Job data
  const jobs = [
    {
      id: 1,
      title: "Associate Solar Technical Analyst",
      location: "Hyderabad",
      department: "Technical",
      type: "Full-Time",
      qualifications: "BE/B.Tech (Electrical/Electronics/equivalent)",
      communication: "Fluent in English",
      experience: "Fresher",
      shifts: "Rotational Shifts",
      description: "Join our technical team to analyze solar energy systems, perform technical assessments, and support project development initiatives. You'll work with cutting-edge solar technology and contribute to sustainable energy solutions.",
      learnMore: "This role involves hands-on experience with solar panel diagnostics, data analysis tools, and collaboration with engineering teams. Expect a supportive environment with regular feedback sessions and access to advanced training modules."
    },
    {
      id: 2,
      title: " Solar Technical Analyst",
      location: "Hyderabad",
      department: "Analysis",
      type: "Full-Time",
      qualifications: "BE/B.Tech (Electrical/Electronics/equivalent)",
      communication: "Fluent in English",
      experience: "1+ years of experience",
      shifts: "Rotational Shifts",
      description: "Analyze solar market trends, perform feasibility studies, and support business development with data-driven insights. Perfect opportunity for fresh graduates to enter the renewable energy sector.",
      learnMore: "This position includes market research, predictive modeling, and presentations to stakeholders. You’ll gain exposure to industry-leading software and have opportunities for international project involvement."
    }
  ];

  // Filter jobs
  const filteredJobs = jobs.filter(job => {
    const matchesFilter = selectedFilter === "All" || job.department === selectedFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle phone call
  const handlePhoneCall = () => {
    window.location.href = "tel:+16302995174";
  };

  // Handle email
  const handleEmail = () => {
    window.location.href = "mailto:careers@amgsol.com?subject=Career Inquiry - American Green Solutions&body=Hello, I am interested in the career opportunities at American Green Solutions.";
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle resume file change
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Only PDF, DOC, and DOCX files are allowed");
        setResumeFile(null);
        e.target.value = "";
        return;
      }
      
      // Validate file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setFileError("File size must be less than 5MB");
        setResumeFile(null);
        e.target.value = "";
        return;
      }
      
      setResumeFile(file);
    }
  };

  // Handle form submission and send email notification
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Add timestamp
      formDataToSend.append('timestamp', new Date().toISOString());
      
      // Add resume file if selected
      if (resumeFile) {
        formDataToSend.append('resume', resumeFile);
      }

      // Submit application to the career application endpoint
      const response = await fetch('http://localhost:3001/api/career-application', {
        method: 'POST',
        body: formDataToSend, // Don't set Content-Type header for FormData
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      // Show success message
      const resumeMessage = resumeFile ? 
        `📄 Resume "${resumeFile.name}" attached successfully!\n` : 
        "";
        
      alert(`✅ Application submitted successfully!\n${resumeMessage}📧 Email notification has been sent to our HR team.\n🔄 You will hear back from us within 2-3 business days.`);
      
      // Reset form
      setShowForm(false);
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        experience: "", 
        location: "", 
        jobTitle: "" 
      });
      setResumeFile(null);
      setFileError("");
      
      // Reset file input
      const fileInput = document.getElementById('resume-upload');
      if (fileInput) fileInput.value = "";

    } catch (error) {
      console.error('Application submission error:', error);
      alert(`❌ Error submitting application: ${error.message}\n\nPlease try again or contact support at careers@amgsol.com`);
    }
  };

  // Handle learn more
  const handleLearnMore = (jobId) => {
    setShowLearnMore(prev => ({ ...prev, [jobId]: !prev[jobId] }));
  };

  // Handle apply
  const handleApply = (jobTitle) => {
    setFormData({ ...formData, jobTitle });
    setShowForm(true);
  };

  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="hero-content">
          <h1>Careers</h1>
          <h2>Innovate, Collaborate, Elevate – Join Us!</h2>
          <div className="hero-subtitle">
            <h3>Career Opportunities</h3>
            <p>Explore Exciting Opportunities to Grow Your Career</p>
            <p className="highlight">Join a Dynamic Team Driving Innovation</p>
          </div>
          <div className="contact-info">
            <button 
              className="contact-button phone-button" 
              onClick={handlePhoneCall}
              title="Click to call"
            >
              📞 +1 630-299-5174
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <div className="career-search-section">
        <div className="search-container">
          <div className="career-filters">
            <select
              aria-label="Filter by department"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="All">All Departments</option>
              <option value="Technical">Technical</option>
              <option value="Analysis">Analysis</option>
            </select>
            <input
              type="text"
              placeholder="Search jobs by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search jobs"
            />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <section className="job-listings">
        <div className="jobs-container">
          <h2>Current Openings</h2>
          {filteredJobs.length > 0 ? (
            <div className="job-grid">
              {filteredJobs.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>Job Title - {job.title}</h3>
                  </div>
                  <div className="job-details">
                    <div className="job-detail-item">
                      <strong>Location –</strong> {job.location}
                    </div>
                    <div className="job-detail-item">
                      <strong>Qualifications –</strong> {job.qualifications}
                    </div>
                    <div className="job-detail-item">
                      <strong>Communication –</strong> {job.communication}
                    </div>
                    <div className="job-detail-item">
                      <strong>Experience –</strong> {job.experience}
                    </div>
                    <div className="job-detail-item">
                      <strong>Shifts –</strong> {job.shifts}
                    </div>
                    <div className="job-description">
                      <p>{job.description}</p>
                    </div>
                    {showLearnMore[job.id] && (
                      <div className="learn-more-content">
                        <p><strong>Additional Details:</strong> {job.learnMore}</p>
                      </div>
                    )}
                  </div>
                  <div className="job-actions">
                    <button 
                      className="apply-button"
                      onClick={() => handleApply(job.title)}
                      title="Click to apply for this position"
                    >
                      Apply Now
                    </button>
                    <button 
                      className="learn-more-button"
                      onClick={() => handleLearnMore(job.id)}
                      title="Click to learn more about this position"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-jobs">
              <p>No jobs match your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Apply Form */}
      {showForm && (
        <div className="application-form-overlay">
          <div className="application-form">
            <h2>Apply for {formData.jobTitle}</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Experience (e.g., Fresher, 2 years)"
                required
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Location"
                required
              />
              
              {/* Resume Upload Field */}
              <div className="resume-upload-container">
                <label htmlFor="resume-upload" className="resume-upload-label">
                  📄 Upload Resume (Optional)
                </label>
                <input
                  type="file"
                  id="resume-upload"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="resume-input"
                />
                <small className="file-info">Supported: PDF, DOC, DOCX (Max 5MB)</small>
                
                {resumeFile && (
                  <div className="file-selected">
                    <span className="file-name">📎 {resumeFile.name}</span>
                    <span className="file-size">({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                    <button
                      type="button"
                      className="remove-file"
                      onClick={() => {
                        setResumeFile(null);
                        document.getElementById('resume-upload').value = "";
                      }}
                    >
                      ❌ Remove
                    </button>
                  </div>
                )}
                
                {fileError && (
                  <div className="file-error">
                    ⚠️ {fileError}
                  </div>
                )}
              </div>
              <button type="submit" className="submit-button">Submit Application</button>
              <button type="button" className="close-button" onClick={() => setShowForm(false)}>Close</button>
            </form>
          </div>
        </div>
      )}

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="content-container">
          <h2>Why Join American Green Solutions?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌟</div>
              <h4>Innovation-Driven Environment</h4>
              <p>Be part of cutting-edge solar technology development and implementation in the renewable energy sector.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚀</div>
              <h4>Career Growth</h4>
              <p>Comprehensive training programs, mentorship opportunities, and clear advancement pathways.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h4>Collaborative Culture</h4>
              <p>Work with passionate professionals committed to sustainable energy solutions and environmental impact.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌍</div>
              <h4>Global Impact</h4>
              <p>Contribute to renewable energy projects that make a difference worldwide and shape the future of clean energy.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">⚖️</div>
              <h4>Work-Life Integration</h4>
              <p>Enjoy a balanced lifestyle with flexible hours and supportive policies tailored to your needs.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌱</div>
              <h4>Community Engagement</h4>
              <p>Participate in local sustainability initiatives and corporate social responsibility programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="employee-benefits">
        <div className="content-container">
          <h2>Employee Benefits</h2>
          <div className="benefits-list">
            <div className="benefit-category">
              <h4>Health & Wellness</h4>
              <ul>
                <li>Comprehensive health insurance coverage</li>
                <li>Dental and vision insurance</li>
                <li>Mental health and wellness support</li>
                <li>Employee wellness programs and initiatives</li>
              </ul>
            </div>
            <div className="benefit-category">
              <h4>Work-Life Balance</h4>
              <ul>
                <li>Flexible working hours and schedules</li>
                <li>Hybrid and remote work options</li>
                <li>Generous paid time off policy</li>
                <li>Holiday and festival bonuses</li>
              </ul>
            </div>
            <div className="benefit-category">
              <h4>Professional Development</h4>
              <ul>
                <li>Technical training and certification programs</li>
                <li>Conference and workshop attendance</li>
                <li>Solar technology skill development</li>
                <li>Leadership and mentorship programs</li>
              </ul>
            </div>
            <div className="benefit-category">
              <h4>Financial Benefits</h4>
              <ul>
                <li>Competitive salary packages</li>
                <li>Performance-based bonuses and incentives</li>
                <li>Provident fund and retirement planning</li>
                <li>Employee referral bonus program</li>
              </ul>
            </div>
            <div className="benefit-category">
              <h4>Recognition & Rewards</h4>
              <ul>
                <li>Employee of the month awards</li>
                <li>Annual performance recognition events</li>
                <li>Special milestone celebrations</li>
                <li>Customized reward programs</li>
              </ul>
            </div>
            <div className="benefit-category">
              <h4>Technology Access</h4>
              <ul>
                <li>Latest solar tech tools and software</li>
                <li>High-performance workstations</li>
                <li>Regular hardware upgrades</li>
                <li>Access to online learning platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="content-container">
          <h2>Application Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Apply Online</h4>
              <p>Submit your application and resume through our email system by clicking "Apply Now"</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Initial Screening</h4>
              <p>HR team reviews your application, qualifications, and relevant experience</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Technical Assessment</h4>
              <p>Technical evaluation with our solar engineering and analysis team</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Final Interview</h4>
              <p>Meet with department heads, team leaders, and key stakeholders</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h4>Welcome Aboard</h4>
              <p>Complete onboarding process and integration into our dynamic team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="career-contact">
        <div className="content-container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our team and help build a sustainable future with innovative solar energy solutions.</p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Phone:</strong> 
              <button 
                className="contact-link phone-link"
                onClick={handlePhoneCall}
                title="Click to call"
              >
                +1 630-299-5174
              </button>
            </div>
            <div className="contact-item">
              <strong>Email:</strong> 
              <button 
                className="contact-link email-link"
                onClick={handleEmail}
                title="Click to send email"
              >
                careers@amgsol.com
              </button>
            </div>
            <div className="contact-item">
              <strong>Location:</strong> Hyderabad, India
            </div>
          </div>
          <div className="cta-buttons">
            <button 
              className="secondary-cta"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              title="Go to top to view positions"
            >
              View All Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;