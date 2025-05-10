import { useLocation, useNavigate } from "react-router-dom";

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, score, total } = location.state || {
    results: [],
    score: 0,
    total: 0,
  };

  if (!results.length) {
    navigate("/");
    return null;
  }

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Quiz Results</h2>
              <div className="display-4 mb-4">
                {score} / {total}
              </div>
              <div className="h4 mb-4">Score: {percentage}%</div>
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Start New Quiz
              </button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Detailed Results</h3>
              {results.map((result, index) => (
                <div key={index} className="mb-4 p-3 border rounded">
                  <p className="lead mb-2">
                    <strong>Question {index + 1}:</strong> {result.question}
                  </p>
                  <p
                    className={`mb-1 ${
                      result.isCorrect ? "text-success" : "text-danger"
                    }`}
                  >
                    Your Answer: {result.userAnswer}
                  </p>
                  {!result.isCorrect && (
                    <p className="text-success mb-0">
                      Correct Answer: {result.correctAnswer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
