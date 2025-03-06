import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { useFeedback } from "../context/FeedbackContext";

// คอมโพเนนต์สำหรับแสดงคำถาม
const Feedback = () => {
  const { feedback } = useFeedback();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: "How would you rate the service?",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      id: 2,
      text: "How was the cleanliness?",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      id: 3,
      text: "Would you recommend this service?",
      options: ["1", "2", "3"],
    },
  ];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/thank-you");
    }
  };

  return (
    <div className="p-4">
      {questions[currentQuestionIndex] && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          index={currentQuestionIndex}
          handleNext={handleNext}
        />
      )}
      <button
        onClick={handleNext}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default Feedback;
