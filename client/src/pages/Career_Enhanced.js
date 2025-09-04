// import React, { useState } from "react";
// import "./Career.css";

// const Career = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     location: "",
//     jobTitle: "",
//     coverLetter: "",
//     portfolioUrl: "",
//     linkedinUrl: "",
//     skills: "",
//   });
//   const [resumeFile, setResumeFile] = useState(null);
//   const [fileError, setFileError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showLearnMore, setShowLearnMore] = useState({});

//   // Enhanced job data with more details
//   const jobs = [
//     {
//       id: 1,
//       title: "Associate Solar Technical Analyst",
//       location: "Hyderabad",
//       department: "Technical",
//       type: "Full-Time",
//       salary: "₹4-8 LPA",
//       qualifications: "BE/B.Tech (Electrical/Electronics/equivalent)",
//       communication: "Fluent in English",
//       experience: "Fresher to 2 years",
//       shifts: "Rotational Shifts",
//       skills: "Solar PV systems, AutoCAD, PVSyst, Data Analysis",
//       description: "Join our technical team to analyze solar energy systems, perform technical assessments, and support project development initiatives. You'll work with cutting-edge solar technology and contribute to sustainable energy solutions.",
//       learnMore: "This role involves hands-on experience with solar panel diagnostics, data analysis tools, and collaboration with engineering teams. Expect a supportive environment with regular feedback sessions and access to advanced training modules including PVSyst, AutoCAD, and project management tools.",
//       responsibilities: [
//         "Analyze solar energy systems and performance data",
//         "Create technical drawings using AutoCAD and design software", 
//         "Collaborate with engineering teams on project development",
//         "Prepare technical reports and documentation",
//         "Support field operations and system troubleshooting"
//       ]
//     },
//     {
//       id: 2,
//       title: "Associate Solar Analyst",
//       location: "Hyderabad", 
//       department: "Analysis",
//       type: "Full-Time",
//       salary: "₹3.5-7 LPA",
//       qualifications: "BE/B.Tech (Electrical/Electronics/equivalent)",
//       communication: "Fluent in English",
//       experience: "Fresher to 1.5 years",
//       shifts: "Rotational Shifts",
//       skills: "Market Research, Excel, Data Analytics, Financial Modeling",
//       description: "Analyze solar market trends, perform feasibility studies, and support business development with data-driven insights. Perfect opportunity for fresh graduates to enter the renewable energy sector.",
//       learnMore: "This position includes market research, predictive modeling, and presentations to stakeholders. You'll gain exposure to industry-leading software and have opportunities for international project involvement including financial analysis and market trend reporting.",
//       responsibilities: [
//         "Conduct market research and competitive analysis",
//         "Develop financial models for solar projects",
//         "Create presentations for stakeholders and clients",
//         "Support business development with data insights",
//         "Monitor industry trends and regulatory changes"
//       ]
//     },
//     {
//       id: 3,
//       title: "Solar Project Manager",
//       location: "Hyderabad/Remote",
//       department: "Project Management", 
//       type: "Full-Time",
//       salary: "₹8-15 LPA",
//       qualifications: "BE/B.Tech + MBA/PMP preferred",
//       communication: "Excellent English communication",
//       experience: "3-6 years in renewable energy",
//       shifts: "Flexible Hours",
//       skills: "Project Management, PMP, MS Project, Team Leadership",
//       description: "Lead solar installation projects from conception to completion, manage cross-functional teams, and ensure project delivery within timeline and budget constraints.",
//       learnMore: "This senior role involves managing multiple projects simultaneously, client interaction, vendor coordination, and team leadership. Includes international project exposure and opportunities for PMP certification.",
//       responsibilities: [
//         "Manage end-to-end solar project lifecycle",
//         "Coordinate with vendors, contractors, and stakeholders",
//         "Monitor project budgets, timelines, and quality",
//         "Lead cross-functional project teams",
//         "Ensure compliance with safety and regulatory standards"
//       ]
//     }
//   ];
//   // Filter jobs
//   const filteredJobs = jobs.filter(job => {
//     const matchesFilter = selectedFilter === "All" || job.department === selectedFilter;
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          job.skills.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesFilter && matchesSearch;
//   });

//   // Handle phone call
//   const handlePhoneCall = () => {
//     window.location.href = "tel:+16302995174";
//   };

//   // Handle email
//   const handleEmail = () => {
//     window.location.href = "mailto:careers@amgsol.com?subject=Career Inquiry - American Green Solutions&body=Hello, I am interested in the career opportunities at American Green Solutions.";
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle resume file change
//   const handleResumeChange = (e) => {
//     const file = e.target.files[0];
//     setFileError("");
    
//     if (file) {
//       // Validate file type
//       const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//       if (!allowedTypes.includes(file.type)) {
//         setFileError("Only PDF, DOC, and DOCX files are allowed");
//         setResumeFile(null);
//         e.target.value = "";
//         return;
//       }
      
//       // Validate file size (5MB limit)
//       const maxSize = 5 * 1024 * 1024; // 5MB in bytes
//       if (file.size > maxSize) {
//         setFileError("File size must be less than 5MB");
//         setResumeFile(null);
//         e.target.value = "";
//         return;
//       }
      
//       setResumeFile(file);
//     }
//   };

//   // Handle form submission with resume upload
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Create FormData for file upload
//       const formDataToSend = new FormData();
      
//       // Add all form fields
//       Object.keys(formData).forEach(key => {
//         formDataToSend.append(key, formData[key]);
//       });
      
//       // Add timestamp
//       formDataToSend.append('timestamp', new Date().toISOString());
      
//       // Add resume file if selected
//       if (resumeFile) {
//         formDataToSend.append('resume', resumeFile);
//       }

//       // Submit application
//       const response = await fetch('http://localhost:3001/api/career-application', {
//         method: 'POST',
//         body: formDataToSend, // Don't set Content-Type header, let browser set it with boundary
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to submit application');
//       }

//       // Show success message
//       const resumeMessage = resumeFile ? 
//         `📄 Resume "${resumeFile.name}" attached successfully!\n` : 
//         "📄 Application submitted without resume.\n";
        
//       alert(`✅ Application submitted successfully!\n${resumeMessage}📧 Email notification sent to HR team.\n🔄 You will hear back within 2-3 business days.`);
      
//       // Reset form and state
//       setShowForm(false);
//       setFormData({ 
//         name: "", 
//         email: "", 
//         phone: "", 
//         experience: "", 
//         location: "", 
//         jobTitle: "",
//         coverLetter: "",
//         portfolioUrl: "",
//         linkedinUrl: "",
//         skills: ""
//       });
//       setResumeFile(null);
//       setFileError("");
      
//       // Reset file input
//       const fileInput = document.getElementById('resume-upload');
//       if (fileInput) fileInput.value = "";

//     } catch (error) {
//       console.error('Application submission error:', error);
//       alert(`❌ Error submitting application: ${error.message}\n\nPlease try again or contact support at careers@amgsol.com`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   // Handle learn more
//   const handleLearnMore = (jobId) => {
//     setShowLearnMore(prev => ({ ...prev, [jobId]: !prev[jobId] }));
//   };

//   // Handle apply
//   const handleApply = (jobTitle) => {
//     setFormData({ ...formData, jobTitle });
//     setShowForm(true);
//   };

//   // Close form handler
//   const handleCloseForm = () => {
//     if (!isSubmitting) {
//       setShowForm(false);
//       setResumeFile(null);
//       setFileError("");
//       setFormData({ 
//         name: "", 
//         email: "", 
//         phone: "", 
//         experience: "", 
//         location: "", 
//         jobTitle: "",
//         coverLetter: "",
//         portfolioUrl: "",
//         linkedinUrl: "",
//         skills: ""
//       });
//       // Reset file input
//       const fileInput = document.getElementById('resume-upload');
//       if (fileInput) fileInput.value = "";
//     }
//   };

//   return (
//     <div className="career-container">
//       {/* Hero Section */}
//       <section className="career-hero">
//         <div className="hero-content">
//           <h1>Careers</h1>
//           <h2>Innovate, Collaborate, Elevate – Join Us!</h2>
//           <div className="hero-subtitle">
//             <h3>Career Opportunities</h3>
//             <p>Explore Exciting Opportunities to Grow Your Career</p>
//             <p className="highlight">Join a Dynamic Team Driving Innovation</p>
//           </div>
//           <div className="contact-info">
//             <button 
//               className="contact-button phone-button" 
//               onClick={handlePhoneCall}
//               title="Click to call"
//             >
//               📞 +1 630-299-5174
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Search Section */}
//       <div className="career-search-section">
//         <div className="search-container">
//           <div className="career-filters">
//             <select
//               aria-label="Filter by department"
//               value={selectedFilter}
//               onChange={(e) => setSelectedFilter(e.target.value)}
//             >
//               <option value="All">All Departments</option>
//               <option value="Technical">Technical</option>
//               <option value="Analysis">Analysis</option>
//               <option value="Project Management">Project Management</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search by title, location, or skills..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               aria-label="Search jobs"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Job Listings */}
//       <section className="job-listings">
//         <div className="jobs-container">
//           <h2>Current Openings ({filteredJobs.length})</h2>
//           {filteredJobs.length > 0 ? (
//             <div className="job-grid">
//               {filteredJobs.map(job => (
//                 <div key={job.id} className="job-card">
//                   <div className="job-header">
//                     <h3>{job.title}</h3>
//                     <div className="job-badges">
//                       <span className="badge type-badge">{job.type}</span>
//                       <span className="badge salary-badge">{job.salary}</span>
//                     </div>
//                   </div>
//                   <div className="job-details">
//                     <div className="job-detail-item">
//                       <strong>📍 Location:</strong> {job.location}
//                     </div>
//                     <div className="job-detail-item">
//                       <strong>🎓 Qualifications:</strong> {job.qualifications}
//                     </div>
//                     <div className="job-detail-item">
//                       <strong>💬 Communication:</strong> {job.communication}
//                     </div>
//                     <div className="job-detail-item">
//                       <strong>💼 Experience:</strong> {job.experience}
//                     </div>
//                     <div className="job-detail-item">
//                       <strong>⏰ Shifts:</strong> {job.shifts}
//                     </div>
//                     <div className="job-detail-item">
//                       <strong>🛠️ Key Skills:</strong> {job.skills}
//                     </div>
//                     <div className="job-description">
//                       <p>{job.description}</p>
//                     </div>
//                     {showLearnMore[job.id] && (
//                       <div className="learn-more-content">
//                         <div className="additional-details">
//                           <h4>Additional Details:</h4>
//                           <p>{job.learnMore}</p>
                          
//                           <h4>Key Responsibilities:</h4>
//                           <ul>
//                             {job.responsibilities.map((resp, index) => (
//                               <li key={index}>{resp}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="job-actions">
//                     <button 
//                       className="apply-button"
//                       onClick={() => handleApply(job.title)}
//                       title="Click to apply for this position"
//                     >
//                       Apply Now
//                     </button>
//                     <button 
//                       className="learn-more-button"
//                       onClick={() => handleLearnMore(job.id)}
//                       title="Click to learn more about this position"
//                     >
//                       {showLearnMore[job.id] ? 'Show Less' : 'Learn More'}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="no-jobs">
//               <p>No jobs match your criteria. Try adjusting your search or filters.</p>
//             </div>
//           )}
//         </div>
//       </section>
//       {/* Enhanced Application Form with Resume Upload */}
//       {showForm && (
//         <div className="application-form-overlay">
//           <div className="application-form enhanced-form">
//             <div className="form-header">
//               <h2>Apply for {formData.jobTitle}</h2>
//               <p>Complete your application below. Fields marked with * are required.</p>
//             </div>
            
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//               {/* Personal Information Section */}
//               <div className="form-section">
//                 <h3>Personal Information</h3>
//                 <div className="form-row">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Full Name *"
//                     required
//                     className="form-input"
//                   />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Email Address *"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-row">
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     placeholder="Phone Number *"
//                     required
//                     className="form-input"
//                   />
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleInputChange}
//                     placeholder="Current Location *"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               {/* Professional Information Section */}
//               <div className="form-section">
//                 <h3>Professional Information</h3>
//                 <div className="form-row">
//                   <input
//                     type="text"
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleInputChange}
//                     placeholder="Experience Level (e.g., Fresher, 2 years) *"
//                     required
//                     className="form-input"
//                   />
//                   <input
//                     type="text"
//                     name="skills"
//                     value={formData.skills}
//                     onChange={handleInputChange}
//                     placeholder="Key Skills (comma-separated)"
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-row">
//                   <input
//                     type="url"
//                     name="linkedinUrl"
//                     value={formData.linkedinUrl}
//                     onChange={handleInputChange}
//                     placeholder="LinkedIn Profile URL"
//                     className="form-input"
//                   />
//                   <input
//                     type="url"
//                     name="portfolioUrl"
//                     value={formData.portfolioUrl}
//                     onChange={handleInputChange}
//                     placeholder="Portfolio/Website URL"
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               {/* Resume Upload Section */}
//               <div className="form-section">
//                 <h3>Resume Upload</h3>
//                 <div className="file-upload-container">
//                   <label htmlFor="resume-upload" className="file-upload-label">
//                     <div className="file-upload-area">
//                       <div className="upload-icon">📄</div>
//                       <div className="upload-text">
//                         <strong>Click to upload your resume</strong>
//                         <p>Supported formats: PDF, DOC, DOCX (Max size: 5MB)</p>
//                       </div>
//                     </div>
//                   </label>
//                   <input
//                     type="file"
//                     id="resume-upload"
//                     name="resume"
//                     accept=".pdf,.doc,.docx"
//                     onChange={handleResumeChange}
//                     className="file-input"
//                   />
                  
//                   {resumeFile && (
//                     <div className="file-selected">
//                       <div className="file-info">
//                         <span className="file-name">📎 {resumeFile.name}</span>
//                         <span className="file-size">({(resumeFile.size / 1024).toFixed(1)} KB)</span>
//                       </div>
//                       <button
//                         type="button"
//                         className="remove-file"
//                         onClick={() => {
//                           setResumeFile(null);
//                           document.getElementById('resume-upload').value = "";
//                         }}
//                       >
//                         ❌
//                       </button>
//                     </div>
//                   )}
                  
//                   {fileError && (
//                     <div className="file-error">
//                       ⚠️ {fileError}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Cover Letter Section */}
//               <div className="form-section">
//                 <h3>Cover Letter (Optional)</h3>
//                 <textarea
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleInputChange}
//                   placeholder="Tell us why you're interested in this position and what makes you a great fit..."
//                   className="form-textarea"
//                   rows="4"
//                 />
//               </div>

//               {/* Form Actions */}
//               <div className="form-actions">
//                 <button 
//                   type="submit" 
//                   className="submit-button"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <span className="loading-spinner">⏳</span>
//                       Submitting...
//                     </>
//                   ) : (
//                     <>
//                       📤 Submit Application
//                     </>
//                   )}
//                 </button>
//                 <button 
//                   type="button" 
//                   className="close-button"
//                   onClick={handleCloseForm}
//                   disabled={isSubmitting}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* Why Join Us Section */}
//       <section className="why-join-us">
//         <div className="content-container">
//           <h2>Why Join American Green Solutions?</h2>
//           <div className="benefits-grid">
//             <div className="benefit-item">
//               <div className="benefit-icon">🌟</div>
//               <h4>Innovation-Driven Environment</h4>
//               <p>Be part of cutting-edge solar technology development and implementation in the renewable energy sector.</p>
//             </div>
//             <div className="benefit-item">
//               <div className="benefit-icon">🚀</div>
//               <h4>Career Growth</h4>
//               <p>Comprehensive training programs, mentorship opportunities, and clear advancement pathways with certification support.</p>
//             </div>
//             <div className="benefit-item">
//               <div className="benefit-icon">🤝</div>
//               <h4>Collaborative Culture</h4>
//               <p>Work with passionate professionals committed to sustainable energy solutions and environmental impact.</p>
//             </div>
//             <div className="benefit-item">
//               <div className="benefit-icon">🌍</div>
//               <h4>Global Impact</h4>
//               <p>Contribute to renewable energy projects that make a difference worldwide and shape the future of clean energy.</p>
//             </div>
//             <div className="benefit-item">
//               <div className="benefit-icon">⚖️</div>
//               <h4>Work-Life Integration</h4>
//               <p>Enjoy a balanced lifestyle with flexible hours, hybrid work options, and supportive policies tailored to your needs.</p>
//             </div>
//             <div className="benefit-item">
//               <div className="benefit-icon">🌱</div>
//               <h4>Community Engagement</h4>
//               <p>Participate in local sustainability initiatives and corporate social responsibility programs.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Employee Benefits */}
//       <section className="employee-benefits">
//         <div className="content-container">
//           <h2>Comprehensive Employee Benefits</h2>
//           <div className="benefits-list">
//             <div className="benefit-category">
//               <h4>🏥 Health & Wellness</h4>
//               <ul>
//                 <li>Comprehensive health insurance coverage for employee and family</li>
//                 <li>Dental and vision insurance with premium coverage</li>
//                 <li>Mental health and wellness support programs</li>
//                 <li>Employee wellness programs and health checkups</li>
//                 <li>Gym membership reimbursement and fitness programs</li>
//               </ul>
//             </div>
//             <div className="benefit-category">
//               <h4>🏡 Work-Life Balance</h4>
//               <ul>
//                 <li>Flexible working hours and hybrid work arrangements</li>
//                 <li>Remote work options for eligible positions</li>
//                 <li>Generous paid time off (25+ days annually)</li>
//                 <li>Festival bonuses and special leave policies</li>
//                 <li>Sabbatical opportunities for long-term employees</li>
//               </ul>
//             </div>
//             <div className="benefit-category">
//               <h4>📚 Professional Development</h4>
//               <ul>
//                 <li>Technical training and industry certification programs</li>
//                 <li>Conference attendance and workshop sponsorship</li>
//                 <li>Solar technology and renewable energy skill development</li>
//                 <li>Leadership development and mentorship programs</li>
//                 <li>Tuition reimbursement for relevant courses</li>
//               </ul>
//             </div>
//             <div className="benefit-category">
//               <h4>💰 Financial Benefits</h4>
//               <ul>
//                 <li>Competitive salary packages with annual reviews</li>
//                 <li>Performance-based bonuses and incentive programs</li>
//                 <li>Provident Fund (PF) and Employee State Insurance (ESI)</li>
//                 <li>Employee referral bonus program (₹25,000-50,000)</li>
//                 <li>Stock options for senior positions</li>
//               </ul>
//             </div>
//             <div className="benefit-category">
//               <h4>🏆 Recognition & Rewards</h4>
//               <ul>
//                 <li>Employee of the month awards and recognition</li>
//                 <li>Annual performance recognition events and trips</li>
//                 <li>Special milestone celebrations and service awards</li>
//                 <li>Innovation awards for creative solutions</li>
//                 <li>Team building activities and company events</li>
//               </ul>
//             </div>
//             <div className="benefit-category">
//               <h4>💻 Technology & Tools</h4>
//               <ul>
//                 <li>Latest solar analysis tools and engineering software</li>
//                 <li>High-performance laptops and workstations</li>
//                 <li>Regular hardware and software upgrades</li>
//                 <li>Access to online learning platforms and courses</li>
//                 <li>Mobile and internet reimbursement</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Application Process */}
//       <section className="application-process">
//         <div className="content-container">
//           <h2>Our Application Process</h2>
//           <div className="process-timeline">
//             <div className="timeline-item">
//               <div className="step-number">1</div>
//               <div className="step-content">
//                 <h4>📝 Submit Application</h4>
//                 <p><strong>What to expect:</strong> Submit your application with resume through our online portal. Upload your resume in PDF/DOC format.</p>
//                 <p><strong>Timeline:</strong> Instant confirmation</p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="step-number">2</div>
//               <div className="step-content">
//                 <h4>📋 Initial Screening</h4>
//                 <p><strong>What to expect:</strong> HR team reviews your qualifications, experience, and resume. Phone screening call to discuss your background.</p>
//                 <p><strong>Timeline:</strong> 2-3 business days</p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="step-number">3</div>
//               <div className="step-content">
//                 <h4>🔧 Technical Assessment</h4>
//                 <p><strong>What to expect:</strong> Technical evaluation with our solar engineering team. May include practical problem-solving scenarios.</p>
//                 <p><strong>Timeline:</strong> 3-5 business days</p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="step-number">4</div>
//               <div className="step-content">
//                 <h4>💼 Final Interview</h4>
//                 <p><strong>What to expect:</strong> Meet with department heads, team leaders, and stakeholders. Cultural fit assessment and role expectations discussion.</p>
//                 <p><strong>Timeline:</strong> 5-7 business days</p>
//               </div>
//             </div>
//             <div className="timeline-item">
//               <div className="step-number">5</div>
//               <div className="step-content">
//                 <h4>🎉 Welcome Aboard</h4>
//                 <p><strong>What to expect:</strong> Offer letter, background verification, and comprehensive onboarding program with team integration.</p>
//                 <p><strong>Timeline:</strong> 7-10 business days</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Contact Section */}
//       <section className="career-contact">
//         <div className="content-container">
//           <h2>Ready to Start Your Journey?</h2>
//           <p>Join our team and help build a sustainable future with innovative solar energy solutions.</p>
          
//           <div className="contact-grid">
//             <div className="contact-card">
//               <h4>📞 Phone</h4>
//               <button 
//                 className="contact-link phone-link"
//                 onClick={handlePhoneCall}
//                 title="Click to call"
//               >
//                 +1 630-299-5174
//               </button>
//               <p>Available: Monday - Friday, 9 AM - 6 PM EST</p>
//             </div>
            
//             <div className="contact-card">
//               <h4>📧 Email</h4>
//               <button 
//                 className="contact-link email-link"
//                 onClick={handleEmail}
//                 title="Click to send email"
//               >
//                 careers@amgsol.com
//               </button>
//               <p>Response time: Within 24 hours</p>
//             </div>
            
//             <div className="contact-card">
//               <h4>📍 Location</h4>
//               <p><strong>Headquarters:</strong> Hyderabad, India</p>
//               <p><strong>Remote positions:</strong> Available for select roles</p>
//             </div>
//           </div>
          
//           <div className="cta-buttons">
//             <button 
//               className="primary-cta"
//               onClick={() => window.scrollTo({top: document.querySelector('.job-listings').offsetTop - 100, behavior: 'smooth'})}
//               title="Go to job listings"
//             >
//               🔍 View All Positions
//             </button>
//             <button 
//               className="secondary-cta"
//               onClick={handleEmail}
//               title="Send general inquiry"
//             >
//               💬 General Inquiry
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Application Tips Section */}
//       <section className="application-tips">
//         <div className="content-container">
//           <h2>Application Tips for Success</h2>
//           <div className="tips-grid">
//             <div className="tip-item">
//               <div className="tip-icon">📄</div>
//               <h4>Resume Guidelines</h4>
//               <ul>
//                 <li>Keep it concise and relevant (1-2 pages)</li>
//                 <li>Highlight renewable energy experience</li>
//                 <li>Include technical skills and certifications</li>
//                 <li>Use PDF format for best compatibility</li>
//               </ul>
//             </div>
//             <div className="tip-item">
//               <div className="tip-icon">💬</div>
//               <h4>Cover Letter Best Practices</h4>
//               <ul>
//                 <li>Explain your interest in renewable energy</li>
//                 <li>Mention specific skills relevant to the role</li>
//                 <li>Show knowledge about our company</li>
//                 <li>Keep it personal and authentic</li>
//               </ul>
//             </div>
//             <div className="tip-item">
//               <div className="tip-icon">🎯</div>
//               <h4>Interview Preparation</h4>
//               <ul>
//                 <li>Research solar technology trends</li>
//                 <li>Prepare technical examples from experience</li>
//                 <li>Review our company values and mission</li>
//                 <li>Prepare questions about the role and team</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Career;