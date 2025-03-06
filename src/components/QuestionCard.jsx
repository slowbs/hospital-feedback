import React from "react";
import { useFeedback } from "../context/FeedbackContext";

// คอมโพเนนต์สำหรับแสดงคำถาม + ปุ่มให้คะแนน (รูป PNG)
const QuestionCard = ({ question, index, handleNext }) => {
  const { addFeedback } = useFeedback();

  const handleClick = (response) => {
    addFeedback(question.id, response, ""); // ส่งคำตอบไปยัง Context
    handleNext();
  };

  return (
    <div className="question-card p-4 mb-4 bg-white rounded shadow">
      <p className="text-lg font-semibold">{question.text}</p>
      <div className="flex space-x-2 mt-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="p-2 border border-gray-300 rounded hover:bg-gray-200"
            onClick={() => handleClick(idx + 1)} // ส่งคำตอบและไปคำถามถัดไป
          >
            <img
              src={require(`../assets/img/${option}.png`)} // ใช้ภาพ PNG
              alt={`option ${idx + 1}`}
              className="w-20 h-8"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
