#!/bin/bash

# Navigate to the client directory
cd client

# Install dependencies
echo "Installing client dependencies..."
npm install

# Build the React app
echo "Building the React app..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "Build failed. Please check the errors above."
  exit 1
fi

# Check if build directory exists
if [ ! -d "build" ]; then
  echo "Build directory not found. Build might have failed."
  exit 1
fi

# Navigate back to the root directory
cd ..

echo "Build successful! You can now deploy using one of the following methods:"
echo ""
echo "1. Deploy to GitHub Pages:"
echo "   - First, update the 'homepage' in client/package.json with your GitHub Pages URL"
echo "   - Run: cd client && npm run deploy:github"
echo ""
echo "2. Deploy to Netlify:"
echo "   - Drag and drop the 'client/build' folder to Netlify"
echo "   - Or connect your GitHub repository to Netlify"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Drag and drop the 'client/build' folder to Vercel"
echo "   - Or connect your GitHub repository to Vercel"

# Make the script executable
chmod +x deploy.sh
