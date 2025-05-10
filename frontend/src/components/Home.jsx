import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, numQuestions }),
      });

      const data = await response.json();
      if (data.questions) {
        navigate("/quiz", {
          state: { questions: data.questions, topic: topic },
        });
      }
    } catch (error) {
      console.error("Failed to generate quiz:", error);
      alert("Failed to generate quiz. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Create Your Quiz</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="topic" className="form-label">
                    Quiz Topic
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                    placeholder="Enter quiz topic"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="numQuestions" className="form-label">
                    Number of Questions
                  </label>
                  <select
                    className="form-select"
                    id="numQuestions"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(Number(e.target.value))}
                  >
                    {[3, 5, 7, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Generate Quiz
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
