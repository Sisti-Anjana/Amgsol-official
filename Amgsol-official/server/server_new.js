require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();

// Configure multer for file uploads
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Create unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only PDF, DOC, DOCX files
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: fileFilter
});

app.use(express.json());
app.use(cors({ 
  origin: ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:3001'] 
}));

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
// Function to create HTML table for career applications with resume attachment
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
// Enhanced route for career applications with resume upload
app.post('/api/career-application', upload.single('resume'), async (req, res) => {
  try {
    const applicationData = req.body;
    const resumeFile = req.file;
    
    console.log('📋 Career Application Received:', {
      applicant: applicationData.name,
      position: applicationData.jobTitle,
      hasResume: !!resumeFile,
      timestamp: new Date().toISOString()
    });

    // Create email content with resume information
    const htmlContent = createCareerApplicationTable(applicationData, resumeFile);
    
    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      cc: 'careers@amgsol.com',
      subject: `🌟 New Job Application - ${applicationData.jobTitle} - ${applicationData.name}`,
      html: htmlContent,
      attachments: resumeFile ? [{
        filename: resumeFile.originalname,
        path: resumeFile.path
      }] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log the application
    const logEntry = {
      timestamp: new Date().toISOString(),
      type: 'career_application',
      data: {
        ...applicationData,
        resumeAttached: !!resumeFile,
        resumeInfo: resumeFile ? {
          originalName: resumeFile.originalname,
          filename: resumeFile.filename,
          size: resumeFile.size,
          mimetype: resumeFile.mimetype
        } : null
      }
    };
    
    const logFile = path.join(logDir, `applications_${new Date().toISOString().split('T')[0]}.json`);
    const logData = fs.existsSync(logFile) ? JSON.parse(fs.readFileSync(logFile, 'utf8')) : [];
    logData.push(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(logData, null, 2));

    console.log('✅ Application processed successfully');
    res.json({ 
      success: true, 
      message: 'Application submitted successfully',
      resumeAttached: !!resumeFile
    });
    
  } catch (error) {
    console.error('❌ Career application error:', error);
    
    // Clean up uploaded file if email fails
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to submit application'
    });
  }
});
// Route for file cleanup (optional - for maintenance)
app.delete('/api/cleanup-resumes', async (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    const now = Date.now();
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
    
    let cleanedCount = 0;
    
    files.forEach(file => {
      const filePath = path.join(uploadsDir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.mtime.getTime() < thirtyDaysAgo) {
        fs.unlinkSync(filePath);
        cleanedCount++;
      }
    });
    
    res.json({ 
      success: true, 
      message: `Cleaned ${cleanedCount} old resume files`,
      cleanedCount 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Failed to cleanup files' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uploadsDir: uploadsDir,
    emailConfigured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASS)
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Enhanced AMG Solutions Server running on port ${PORT}`);
  console.log(`📁 Resume uploads directory: ${uploadsDir}`);
  console.log(`📧 Email configured: ${!!(process.env.EMAIL_USER && process.env.EMAIL_PASS)}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Server shutting down gracefully...');
  process.exit(0);
});