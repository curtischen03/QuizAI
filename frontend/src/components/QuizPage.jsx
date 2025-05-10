import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const questions = location.state?.questions || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill("")
  );

  if (!questions.length) {
    navigate("/");
    return null;
  }

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const results = questions.map((question, index) => ({
      question: question.question,
      userAnswer: selectedAnswers[index],
      correctAnswer: question.answer,
      isCorrect: selectedAnswers[index] === question.answer,
    }));

    const score = results.filter((result) => result.isCorrect).length;
    navigate("/results", {
      state: { results, score, total: questions.length },
    });
  };

  const question = questions[currentQuestion];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">
                Question {currentQuestion + 1} of {questions.length}
              </h5>
              <p className="lead mb-4">{question.question}</p>

              <div className="list-group mb-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action ${
                      selectedAnswers[currentQuestion] === option
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>

                {currentQuestion === questions.length - 1 ? (
                  <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    disabled={selectedAnswers.includes("")}
                  >
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestion]}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
