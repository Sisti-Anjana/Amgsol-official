require('dotenv').config();
const nodemailer = require('nodemailer');

// Test email with the exact same template as your application
const createTestCareerApplicationTable = (formData) => {
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
        <tr style="background: #f8f8f8;">
          <td style="padding: 12px 15px; font-weight: bold; color: #2c5530;">🎯 Applied Position</td>
          <td style="padding: 12px 15px; font-weight: bold; color: #d2691e;">${formData.jobTitle}</td>
        </tr>
      </table>
      
      <div style="background: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p style="margin: 0; color: #2c5530; font-weight: bold;">📝 Next Steps:</p>
        <ul style="color: #2c5530; margin: 10px 0;">
          <li>Review the application details</li>
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

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send test email with formatted table
async function sendTestFormattedEmail() {
  try {
    console.log('📧 Sending test formatted email...');
    
    const testData = {
      name: "John Doe (TEST)",
      email: "john.doe@test.com",
      phone: "+1-234-567-8900",
      experience: "2 years",
      location: "Hyderabad",
      jobTitle: "Associate Solar Analyst"
    };
    
    const htmlContent = createTestCareerApplicationTable(testData);
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anjanasisti2@gmail.com',
      subject: '🧪 TEST: Formatted Job Application Email',
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test formatted email sent successfully!');
    console.log('📋 Message ID:', info.messageId);
    console.log('📧 Check anjanasisti2@gmail.com for the formatted email');
    
  } catch (error) {
    console.error('❌ Error sending formatted email:', error);
  }
}

sendTestFormattedEmail();