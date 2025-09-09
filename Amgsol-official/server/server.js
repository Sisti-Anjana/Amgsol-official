require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();

// Configure multer for resume uploads
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter
});

app.use(express.json());
app.use(cors({ 
  origin: ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:3001'] 
}));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

// Function to create HTML table for career applications
const createCareerApplicationTable = (formData, resumeInfo = null) => {
  const resumeSection = resumeInfo ? `
    <tr style="background: #fff;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">📄 Resume Attached</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">
        <strong>${resumeInfo.originalname}</strong><br>
        <small style="color: #666;">Size: ${(resumeInfo.size / 1024).toFixed(1)} KB | Type: ${resumeInfo.mimetype}</small>
      </td>
    </tr>
  ` : `
    <tr style="background: #fff;">
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">📄 Resume</td>
      <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; color: #999;">No resume attached</td>
    </tr>
  `;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2c5530; text-align: center; border-bottom: 2px solid #2c5530; padding-bottom: 10px;">
        🌟 New Job Application Received
      </h2>
      <p style="color: #666; text-align: center; margin-bottom: 30px;">
        Submitted on: ${new Date().toLocaleString()}
      </p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
        <tr style="background: #2c5530; color: white;">
          <th style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd;">Field</th>
          <th style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd;">Details</th>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">👤 Full Name</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">📧 Email Address</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;"><a href="mailto:${formData.email}" style="color: #0066cc;">${formData.email}</a></td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">📱 Phone Number</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;"><a href="tel:${formData.phone}" style="color: #0066cc;">${formData.phone}</a></td>
        </tr>
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">💼 Experience Level</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.experience}</td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #2c5530;">📍 Location</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.location}</td>
        </tr>
        ${resumeSection}
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; font-weight: bold; color: #2c5530;">🎯 Applied Position</td>
          <td style="padding: 12px 15px; font-weight: bold; color: #d2691e;">${formData.jobTitle}</td>
        </tr>
      </table>
      
      <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 0; color: #2c5530; font-weight: bold;">📝 Next Steps:</p>
        <ul style="color: #2c5530; margin: 10px 0;">
          <li>Review the application details${resumeInfo ? ' and attached resume' : ''}</li>
          <li>Contact the candidate for initial screening</li>
          <li>Schedule technical assessment if qualified</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
        <p>This is an automated notification from American Green Solutions Career Portal</p>
      </div>
    </div>
  `;
};

// Function to create HTML table for contact form submissions
const createContactFormTable = (formData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0066cc; text-align: center; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
        💬 New Quote Request Received
      </h2>
      <p style="color: #666; text-align: center; margin-bottom: 30px;">
        Submitted on: ${new Date().toLocaleString()}
      </p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
        <tr style="background: #0066cc; color: white;">
          <th style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd;">Field</th>
          <th style="padding: 15px; text-align: left; border-bottom: 1px solid #ddd;">Details</th>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">👤 Full Name</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.name}</td>
        </tr>
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">📧 Email Address</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;"><a href="mailto:${formData.email}" style="color: #0066cc;">${formData.email}</a></td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">📱 Phone Number</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;"><a href="tel:${formData.phone}" style="color: #0066cc;">${formData.phone}</a></td>
        </tr>
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">🌍 Country - City</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.countryCity}</td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">🏢 Organisation</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.organisation}</td>
        </tr>
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; color: #0066cc;">💼 Designation</td>
          <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.designation}</td>
        </tr>
        <tr style="background: #fff;">
          <td style="padding: 12px 15px; font-weight: bold; color: #0066cc; vertical-align: top;">📝 Requirements</td>
          <td style="padding: 12px 15px; line-height: 1.6;">${formData.description}</td>
        </tr>
      </table>
      
      <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 0; color: #0066cc; font-weight: bold;">📋 Next Steps:</p>
        <ul style="color: #0066cc; margin: 10px 0;">
          <li>Review the quote request details</li>
          <li>Contact the client for project discussion</li>
          <li>Prepare customized solar solution proposal</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
        <p>This is an automated notification from American Green Solutions Contact Portal</p>
      </div>
    </div>
  `;
};

// Route for sending career application emails
app.post('/api/send-application-email', async (req, res) => {
  try {
    const { applicationData } = req.body;
    
    const htmlContent = createCareerApplicationTable(applicationData);
    
    const textContent = `
═════════════════════════════════════════
🌟 NEW JOB APPLICATION RECEIVED
═════════════════════════════════════════
Submitted on: ${new Date().toLocaleString()}

👤 APPLICANT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name:       ${applicationData.name}
Email Address:   ${applicationData.email} 
Phone Number:    ${applicationData.phone}
Experience:      ${applicationData.experience}
Location:        ${applicationData.location}
Applied Position: ${applicationData.jobTitle}

📝 NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Review the application details
• Contact the candidate for initial screening  
• Schedule technical assessment if qualified

═════════════════════════════════════════
American Green Solutions Career Portal
Automated notification system
═════════════════════════════════════════
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anjanasisti2@gmail.com',
      subject: `🌟 New Job Application: ${applicationData.jobTitle} - ${applicationData.name}`,
      html: htmlContent,
      text: textContent
    };

    await transporter.sendMail(mailOptions);
    
    // Log the email
    const logEntry = `${new Date().toISOString()} - Career Application Email Sent
      To: anjanasisti2@gmail.com
      Applicant: ${applicationData.name}
      Position: ${applicationData.jobTitle}
      ---\n`;
    
    fs.appendFile(path.join(logDir, 'application_emails.log'), logEntry, (err) => {
      if (err) console.error('Log Error:', err);
    });

    res.status(200).json({ 
      success: true, 
      message: 'Application email sent successfully!' 
    });
    
  } catch (error) {
    console.error('Career Application Email Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send application email',
      details: error.message 
    });
  }
});

// Route for sending contact form emails  
app.post('/api/send-contact-email', async (req, res) => {
  try {
    const { contactData } = req.body;
    
    const htmlContent = createContactFormTable(contactData);
    
    const textContent = `
═════════════════════════════════════════
💬 NEW QUOTE REQUEST RECEIVED  
═════════════════════════════════════════
Submitted on: ${new Date().toLocaleString()}

👤 CLIENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name:       ${contactData.name}
Email Address:   ${contactData.email}
Phone Number:    ${contactData.phone}  
Country - City:  ${contactData.countryCity}
Organisation:    ${contactData.organisation}
Designation:     ${contactData.designation}

📝 PROJECT REQUIREMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${contactData.description}

📋 NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Review the quote request details
• Contact the client for project discussion
• Prepare customized solar solution proposal

═════════════════════════════════════════
American Green Solutions Contact Portal
Automated notification system  
═════════════════════════════════════════
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anjanasisti2@gmail.com',
      subject: `💬 New Quote Request from ${contactData.name} - ${contactData.organisation}`,
      html: htmlContent,
      text: textContent
    };

    await transporter.sendMail(mailOptions);
    
    // Log the email
    const logEntry = `${new Date().toISOString()} - Contact Form Email Sent
      To: anjanasisti2@gmail.com
      Contact: ${contactData.name}
      Organisation: ${contactData.organisation}
      ---\n`;
    
    fs.appendFile(path.join(logDir, 'contact_emails.log'), logEntry, (err) => {
      if (err) console.error('Log Error:', err);
    });

    res.status(200).json({ 
      success: true, 
      message: 'Contact email sent successfully!' 
    });
    
  } catch (error) {
    console.error('Contact Email Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send contact email',
      details: error.message 
    });
  }
});

// Legacy email route (keeping for backwards compatibility)
app.post('/api/send-email', (req, res) => {
  const { to, subject, body } = req.body;
  const logEntry = `Timestamp: ${new Date().toISOString()}\nTo: ${to}\nSubject: ${subject}\nBody: ${body}\n---\n`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email Error:', error);
      fs.appendFile(path.join(logDir, 'failed_emails.log'), logEntry + `Error: ${error.message}\n`, (err) => {
        if (err) console.error('Log Error:', err);
      });
      return res.status(500).json({ error: 'Failed to send email' });
    }
    console.log('Email Response:', info.response);
    fs.appendFile(path.join(logDir, 'sent_emails.log'), logEntry + `Response: ${info.response}\n`, (err) => {
      if (err) console.error('Log Error:', err);
    });
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

// Route for saving contact data (enhanced)
app.post('/api/contact', async (req, res) => {
  try {
    // Save contact data and send email notification
    const contactData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    // Save to file for backup
    const contactFile = path.join(logDir, 'contact_submissions.json');
    let contacts = [];
    
    if (fs.existsSync(contactFile)) {
      const existingData = fs.readFileSync(contactFile, 'utf8');
      contacts = JSON.parse(existingData);
    }
    
    contacts.push(contactData);
    fs.writeFileSync(contactFile, JSON.stringify(contacts, null, 2));
    
    // Send email notification
    try {
      const htmlContent = createContactFormTable(contactData);
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'anjanasisti2@gmail.com',
        subject: `💬 New Quote Request from ${contactData.name} - ${contactData.organisation}`,
        html: htmlContent
      };

      await transporter.sendMail(mailOptions);
      console.log('Contact form email sent successfully');
    } catch (emailError) {
      console.error('Failed to send contact email:', emailError);
    }
    
    res.status(200).json({ 
      success: true, 
      message: 'Contact form submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process contact form' 
    });
  }
});

// Route for saving career application data (enhanced with resume upload)
app.post('/api/career-application', upload.single('resume'), async (req, res) => {
  try {
    const applicationData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    const resumeFile = req.file;
    
    console.log('📋 Career Application Received:', {
      applicant: applicationData.name,
      position: applicationData.jobTitle,
      hasResume: !!resumeFile,
      timestamp: new Date().toISOString()
    });
    
    // Save to file for backup
    const applicationsFile = path.join(logDir, 'career_applications.json');
    let applications = [];
    
    if (fs.existsSync(applicationsFile)) {
      const existingData = fs.readFileSync(applicationsFile, 'utf8');
      applications = JSON.parse(existingData);
    }
    
    // Add resume info to application data
    if (resumeFile) {
      applicationData.resumeInfo = {
        originalName: resumeFile.originalname,
        filename: resumeFile.filename,
        size: resumeFile.size,
        mimetype: resumeFile.mimetype
      };
    }
    
    applications.push(applicationData);
    fs.writeFileSync(applicationsFile, JSON.stringify(applications, null, 2));
    
    // Send email notification with resume attachment
    try {
      const htmlContent = createCareerApplicationTable(applicationData, resumeFile);
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        cc: 'careers@amgsol.com',
        subject: `🌟 New Job Application: ${applicationData.jobTitle} - ${applicationData.name}`,
        html: htmlContent,
        attachments: resumeFile ? [{
          filename: resumeFile.originalname,
          path: resumeFile.path
        }] : []
      };

      await transporter.sendMail(mailOptions);
      console.log('✅ Career application email sent successfully');
      
      // Clean up uploaded file after email is sent
      if (resumeFile && fs.existsSync(resumeFile.path)) {
        fs.unlinkSync(resumeFile.path);
        console.log('🗑️ Temporary resume file cleaned up');
      }
    } catch (emailError) {
      console.error('❌ Failed to send career email:', emailError);
      
      // Clean up uploaded file if email fails
      if (resumeFile && fs.existsSync(resumeFile.path)) {
        fs.unlinkSync(resumeFile.path);
      }
    }
    
    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully!',
      resumeAttached: !!resumeFile
    });
    
  } catch (error) {
    console.error('❌ Career application error:', error);
    
    // Clean up uploaded file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process application' 
    });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'American Green Solutions Email Service'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service configured for: ${process.env.EMAIL_USER}`);
  console.log(`📁 Logs directory: ${logDir}`);
});