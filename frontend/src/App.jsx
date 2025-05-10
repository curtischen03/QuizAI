import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <div className="container">
            <span className="navbar-brand mb-0 h1">Quiz App</span>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
