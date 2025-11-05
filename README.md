# StackGuardFrontendTask
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