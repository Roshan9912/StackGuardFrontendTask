# StackGuardFrontendTask
<<<<<<< HEAD
StackGuard Frontend Task: Authentication, Configuration, and Dashboard

This repository contains the solution for the StackGuard Frontend Task, implemented as a single-page React application using functional components, hooks, and Tailwind CSS for styling.

The application implements the required three-page flow, including public and protected routes, and input validation.

🚀 Live Demo

[Insert Vercel Deployment Link Here]

🛠️ Technology Stack

Framework: React (Functional Components & Hooks)

Styling: Tailwind CSS (via CDN in a real environment, using classes here)

State Management: useState, useCallback, and browser localStorage (for persistent authentication and configuration state).

Routing: Simulated using React useState and conditional rendering (single-page approach).

✨ User Flow and Features Implemented

Route

Status

Description

1. Sign-In/Sign-Up (/auth)

Public

Allows toggling between Sign-In and Sign-Up. Includes basic field validation (email format, password length > 6).

2. Configuration (/config)

Protected

Accessible only after successful sign-in (isAuthenticated). Validates the API Key input length (100 to 1000 characters).

3. Dashboard (/dashboard)

Private

Accessible only after both authentication and successful configuration (hasConfigured). Displays a protected heading and a masked version of the saved key.

⚙️ Local Setup and Installation

Follow these steps to clone the repository and run the application locally:

Clone the Repository:

git clone [YOUR_REPO_URL]
cd stackguard-app


Install Dependencies (assuming a standard React/Vite project structure):

npm install


Run the Application:

npm run dev


The application will open in your browser at http://localhost:5173 (or similar).

💡 Code and Design Notes

Single-File Mandate: All components, hooks, and styling logic are contained within the App.jsx file.

UX/Validation: Real-time feedback is provided for the Configuration Key input (current length, required range) to enhance user experience.

Simulated Components: The Card, Input, and Button utilities are custom-built using Tailwind CSS to visually resemble a component library like shadcn/ui.
=======
StackGuard Frontend Task
A modern authentication and configuration workflow built with React, React Router, and Ant Design.

Features
User sign in / sign up form with validation

Configuration key page (requires 100–1000 chars before progressing)

Private dashboard page (protected route)

Auth and config guards using localStorage

Responsive Ant Design UI

Easy notifications for user actions

Technologies
React 18

React Router v6

Ant Design v5

[Optional] Icons: @ant-design/icons

Getting Started
1. Clone the repository
bash
git clone https://github.com/your-username/stackguard-frontend.git
cd stackguard-frontend
cd stackguard-app    # If your code is in this subfolder
2. Install dependencies
Ensure your package.json specifies this:

"react": "^18.2.0"

"react-dom": "^18.2.0"

"antd": "^5.x.x"

Install:

bash
npm install
3. Start the development server
bash
npm start
Open the app at http://localhost:3000

4. Usage Flow
Users start with Sign In / Sign Up tabs.

After authentication, redirected to Configuration.

Must enter a config key (100–1000 chars).

On success: proceed to Dashboard.

Dashboard shows welcome, only for authenticated users with valid config.

Logout clears session and returns to Sign In.

Folder Structure
text
/src
  /components
    AuthForm.jsx
    ProtectedRoute.jsx
  /pages
    SignInSignUp.jsx
    Configuration.jsx
    Dashboard.jsx
  /utils
    auth.js
    configGuard.js
  App.jsx
  index.js
Compatibility Notes
Ant Design v5 supports React 16/17/18. Do not use React 19 yet!

For CSS, in index.js use:

js
import 'antd/dist/reset.css';
React Router v6 required for routing style in sample code.

Deployment
Recommended: Vercel or Netlify

Push code to GitHub, connect project on Vercel/Netlify, deploy.

License
MIT
>>>>>>> 32eeadbb6706eb90e3a426f72a554dcf7e9ec4f4
