@echo off
echo ===============================================
echo    American Green Solutions Email System
echo ===============================================
echo.

echo 📧 Starting Email Server...
cd server
start "Email Server" cmd /k "node server.js"

echo ⏳ Waiting 3 seconds for server to start...
timeout /t 3 /nobreak >nul

echo 🌐 Starting React Client...
cd ../client
start "React Client" cmd /k "npm start"

echo.
echo ✅ Both applications are starting!
echo.
echo 📋 Access Points:
echo    - React App: http://localhost:3000
echo    - API Server: http://localhost:3001
echo    - Health Check: http://localhost:3001/api/health
echo.
echo 📧 Email Notifications will be sent to: anjanasisti2@gmail.com
echo.
echo ⚠️  IMPORTANT: Make sure you've set up the Gmail App Password!
echo    See GMAIL_APP_PASSWORD_SETUP.md for instructions
echo.
pause