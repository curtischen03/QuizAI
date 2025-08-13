
# 🚀 QuizAI

**QuizAI** is an intelligent, full-stack web application that harnesses the power of **Google’s Gemini AI** to generate personalized quizzes in real time. Whether you're testing your fandom knowledge or learning a new subject, QuizAI creates a seamless and interactive quiz experience tailored to your interests.

## 🌐 Demo (Click to redirect to Youtube)

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/lY8MTFlNfO0/0.jpg)](https://www.youtube.com/watch?v=lY8MTFlNfO0)


## ✨ Key Features

* 🔮 **AI-Powered Quiz Generation**: Uses Google Gemini to generate unique, context-aware questions based on any topic.
* ⚡ **Real-Time Interactivity**: Instant feedback as you answer questions to keep you engaged.
* 📊 **Detailed Results Analysis**: Visual breakdown of scores and correct/incorrect answers.
* 📱 **Fully Responsive Design**: Built with Bootstrap for optimal performance across devices.
* 🌈 **Clean, Modular Codebase**: Powered by Vite for blazing-fast frontend development.

## 🛠️ Tech Stack

| Layer     | Technologies           |
| --------- | ---------------------- |
| Frontend  | React, Vite, Bootstrap |
| Backend   | Node.js, Express       |
| AI Engine | Google Gemini API      |

## ⚙️ Getting Started

### Prerequisites

* Node.js **v14+**
* npm **v6+**

### 🔧 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

By default, the app will run on `http://localhost:5173`.

### 🖥️ Backend Setup

```bash
cd backend
npm install
node index.js
```

Backend runs at `http://localhost:5000`.

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory with:

```env
GOOGLE_API_KEY=your_google_api_key
GOOGLE_PROJECT_ID=your_project_id
```

Make sure your key has access to the Gemini API.

## 💡 Sample Topics to Try

* 🏀 Lakers Trivia
* 🧙 Harry Potter
* 🏜️ Dune (Book 1)
* 🐉 Game of Thrones
* 🎓 UCLA

## 🧠 Behind the Scenes

QuizAI uses Gemini's language modeling capabilities to semantically interpret your topic and generate well-structured quiz questions. The frontend uses **React Hooks** and **Axios** for dynamic rendering and API integration, while the backend handles request routing and API proxying via **Express**.

## 🚧 Future Improvements

* User authentication and profile stats
* Topic difficulty customization
* Leaderboard and multiplayer mode
* Admin dashboard for question moderation
