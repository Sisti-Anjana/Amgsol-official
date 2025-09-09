# 🔐 Gmail App Password Setup Guide

## Step-by-Step Instructions to Generate Gmail App Password

### Prerequisites
- Gmail account: anjana.sisti2002@gmail.com
- 2-Factor Authentication must be enabled

### Steps to Generate App Password:

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/
   - Sign in with anjana.sisti2002@gmail.com

2. **Navigate to Security Section**
   - Click on "Security" in the left sidebar
   - Scroll down to "How you sign in to Google"

3. **Enable 2-Factor Authentication** (if not already done)
   - Click on "2-Step Verification"
   - Follow the setup process
   - Verify with your phone number

4. **Generate App Password**
   - In the "2-Step Verification" section, click on "App passwords"
   - You may need to sign in again
   - Select "Other (Custom name)" from the dropdown
   - Enter: "American Green Solutions Email"
   - Click "Generate"

5. **Copy the 16-Character Password**
   - Google will show a 16-character password (e.g., "abcd efgh ijkl mnop")
   - Copy this EXACT password (including spaces)

6. **Update .env File**
   - Open: server/.env
   - Replace the EMAIL_PASS line with:
   ```
   EMAIL_PASS=abcd efgh ijkl mnop
   ```
   (Replace with your actual 16-character password)

### Important Notes:
- ⚠️ The app password shown will only be displayed ONCE
- ⚠️ Copy it immediately and store it securely
- ⚠️ Don't share the app password with anyone
- ⚠️ Use the app password, NOT your regular Gmail password

### Test Your Setup:
After updating the .env file, test with:
```bash
cd server
node test-email.js
```

### If You Still Get Errors:
1. Make sure 2FA is enabled on your Gmail
2. Double-check the app password (16 characters with spaces)
3. Try generating a new app password
4. Ensure you're using anjana.sisti2002@gmail.com (not anjanasisti2@gmail.com)

### Security Best Practices:
- Never commit the .env file to version control
- Keep the app password confidential
- Regenerate app passwords periodically
- Use different app passwords for different applications

---

**Current .env Template:**
```
EMAIL_USER=anjana.sisti2002@gmail.com
EMAIL_PASS=your-16-character-app-password-here
PORT=3001
```

Once you complete these steps, your email system will work perfectly! 📧✅