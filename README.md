# AMG Solutions

Official website for AMG Solutions - Your trusted energy partner.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/amgsol-official.git
   cd amgsol-official
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

### Development

To run the development server:

```bash
# Start client (from project root)
cd client
npm start

# In a separate terminal, start the server
cd ../server
node server.js
```

### Building for Production

```bash
# Build the React app
cd client
npm run build

# The production build will be in the `client/build` directory
```

## Deployment

### Option 1: Deploy to Netlify (Recommended)
1. Push your code to GitHub
2. Sign up for a free Netlify account
3. Connect your GitHub repository
4. Set the build command to `cd client && npm install && npm run build`
5. Set the publish directory to `client/build`
6. Deploy!

### Option 2: Deploy to Vercel
1. Push your code to GitHub
2. Sign up for a free Vercel account
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app
5. Deploy!

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
PORT=5000
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
