import React from "react";
import { useFeedback } from "../context/FeedbackContext";

const QuestionCard = ({ question, index, handleNext }) => {
  const { addFeedback } = useFeedback();

  const handleClick = (response) => {
    addFeedback(question.id, response, ""); // ส่งคำตอบไปยัง Context
    handleNext();
  };

  return (
    <div className="question-card p-6 mb-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto">
      <p className="text-2xl font-semibold text-gray-800 mb-4">{question.text}</p>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
            onClick={() => handleClick(idx + 1)} // ส่งคำตอบและไปคำถามถัดไป
          >
            <img
              src={require(`../assets/img/${option}.png`)} // ใช้ภาพ PNG
              alt={`option ${idx + 1}`}
              className="w-24 h-10 mx-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
