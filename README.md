# StackGuardFrontendTask
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
