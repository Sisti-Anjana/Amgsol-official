require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5000' }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

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

app.post('/api/contact', (req, res) => {
  // Placeholder for saving to database or file
  console.log('Contact Data:', req.body);
  res.status(200).json({ message: 'Data received' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));