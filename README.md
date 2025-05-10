# QuizAI

## Overview

QuizAI is a full-stack web application that allows users to generate and take quizzes on various topics. The application leverages Google's Gemini AI to dynamically generate quiz questions based on user input. The app is built using React for the frontend and Node.js with Express for the backend.

## Tech Stack

- **Frontend**: React, Vite, Bootstrap
- **Backend**: Node.js, Express
- **AI API**: Google Gemini

## Features

- Dynamic quiz generation based on user-specified topics
- Interactive quiz interface with real-time feedback
- Detailed results page with score and answer breakdown
- Responsive design using Bootstrap

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## Environment Variables

Create a `.env` file in the backend directory with the following content:

```
GOOGLE_API_KEY="{your_api_key_here}"
GOOGLE_PROJECT_ID="{your project id here}"
```

Replace `your_api_key_here` with your actual Google API key.

## Usage

- Access the frontend at `http://localhost:5173` (or the port assigned by Vite).
- The backend server runs on `http://localhost:5000`.

## Sample topics

- Lakers Trivia
- Harry Potter
- Dune Book 1
- Game of Thrones
- UCLA
