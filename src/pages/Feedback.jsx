import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { useFeedback } from "../context/FeedbackContext";

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
    {
      id: 4,
      text: "Please provide any additional comments.",
      options: [],
    },
  ];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // เมื่อคำถามทั้งหมดตอบแล้ว ให้ไปที่หน้าสรุปคำตอบ
      navigate("/summary");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="p-4">
      {questions[currentQuestionIndex] && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          index={currentQuestionIndex}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default Feedback;
