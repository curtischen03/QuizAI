import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
