# American Green Solutions - Application Startup Script
Write-Host "===============================================" -ForegroundColor Green
Write-Host "   American Green Solutions Email System" -ForegroundColor Green  
Write-Host "===============================================" -ForegroundColor Green
Write-Host ""

Write-Host "📧 Starting Email Server..." -ForegroundColor Yellow
Set-Location server
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node server.js" -WindowStyle Normal

Write-Host "⏳ Waiting 3 seconds for server to start..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host "🌐 Starting React Client..." -ForegroundColor Yellow
Set-Location ../client
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm start" -WindowStyle Normal

Write-Host ""
Write-Host "✅ Both applications are starting!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Access Points:" -ForegroundColor Cyan
Write-Host "   - React App: http://localhost:3000" -ForegroundColor White
Write-Host "   - API Server: http://localhost:3001" -ForegroundColor White  
Write-Host "   - Health Check: http://localhost:3001/api/health" -ForegroundColor White
Write-Host ""
Write-Host "📧 Email Notifications will be sent to: anjanasisti2@gmail.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "⚠️  IMPORTANT: Make sure you've set up the Gmail App Password!" -ForegroundColor Red
Write-Host "   See GMAIL_APP_PASSWORD_SETUP.md for instructions" -ForegroundColor Yellow
Write-Host ""

# Test email configuration
Write-Host "🧪 Would you like to test the email configuration? (y/n): " -ForegroundColor Yellow -NoNewline
$testEmail = Read-Host

if ($testEmail -eq 'y' -or $testEmail -eq 'Y') {
    Write-Host "📨 Testing email configuration..." -ForegroundColor Yellow
    Set-Location ../server
    node test-email.js
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")