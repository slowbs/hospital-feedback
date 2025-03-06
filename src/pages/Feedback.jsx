import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { useFeedback } from "../context/FeedbackContext";
import Navbar from "../components/Navbar"; // นำเข้า Navbar

const Feedback = () => {
  const { feedback, resetFeedback } = useFeedback();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    resetFeedback(); // รีเซ็ตค่าทุกครั้งที่เข้าหน้า Feedback ใหม่
  }, []); // เพิ่ม resetFeedback เป็น dependency

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
      navigate("/summary");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <Navbar /> {/* เรียกใช้ Navbar */}
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
    </div>
  );
};

export default Feedback;
