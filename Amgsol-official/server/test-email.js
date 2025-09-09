require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('🔧 Testing Email Configuration...');
console.log('📧 Email User:', process.env.EMAIL_USER);
console.log('🔑 App Password Length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'Not set');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test email configuration
async function testEmailConfig() {
  try {
    console.log('📨 Verifying email configuration...');
    await transporter.verify();
    console.log('✅ Email configuration is valid!');
    
    // Send a test email
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'anjanasisti2@gmail.com',
      subject: '🧪 Test Email from American Green Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5530;">🧪 Email Configuration Test</h2>
          <p>This is a test email to verify that your email system is working correctly.</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #2c5530; color: white;">
              <th style="padding: 10px; text-align: left;">Test Parameter</th>
              <th style="padding: 10px; text-align: left;">Status</th>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px;">Email Service</td>
              <td style="padding: 10px;">✅ Gmail SMTP</td>
            </tr>
            <tr>
              <td style="padding: 10px;">Sender Email</td>
              <td style="padding: 10px;">✅ ${process.env.EMAIL_USER}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 10px;">Timestamp</td>
              <td style="padding: 10px;">✅ ${new Date().toLocaleString()}</td>
            </tr>
          </table>
          <p style="color: #666;">If you received this email, your configuration is working perfectly!</p>
        </div>
      `
    };

    console.log('📤 Sending test email...');
    const info = await transporter.sendMail(testMailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('📋 Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 Troubleshooting Tips:');
      console.log('1. Make sure you\'re using a Gmail App Password, not your regular password');
      console.log('2. Enable 2-Factor Authentication on your Gmail account');
      console.log('3. Generate an App Password: Gmail Settings > Security > App passwords');
      console.log('4. Update the EMAIL_PASS in your .env file with the App Password');
    }
  }
}

testEmailConfig();