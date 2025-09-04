// Mock Email Template Generator - Shows what your emails will look like

const createCareerApplicationTable = (formData) => {
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

// Generate sample emails and save as HTML files for preview
console.log('📧 Generating Email Template Previews...');

// Sample Career Application Data
const sampleCareerData = {
  name: "John Smith",
  email: "john.smith@example.com", 
  phone: "+1-555-123-4567",
  experience: "2 years in Solar Industry",
  location: "Hyderabad, India",
  jobTitle: "Associate Solar Technical Analyst"
};

// Sample Contact Form Data
const sampleContactData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@company.com",
  phone: "+1-555-987-6543", 
  countryCity: "USA - Chicago",
  organisation: "Green Energy Solutions",
  designation: "Project Manager",
  description: "Looking for a 100kW commercial solar installation for our office building. Need complete turnkey solution including permits, installation, and maintenance."
};

// Generate HTML files
const fs = require('fs');

const careerEmailHTML = createCareerApplicationTable(sampleCareerData);
const contactEmailHTML = createContactFormTable(sampleContactData);

fs.writeFileSync('PREVIEW_Career_Application_Email.html', careerEmailHTML);
fs.writeFileSync('PREVIEW_Contact_Form_Email.html', contactEmailHTML);

console.log('✅ Email previews generated:');
console.log('📄 PREVIEW_Career_Application_Email.html');
console.log('📄 PREVIEW_Contact_Form_Email.html');
console.log('');
console.log('Open these HTML files in your browser to see exactly how your emails will look!');
console.log('This is the EXACT format that will be sent to anjanasisti2@gmail.com');