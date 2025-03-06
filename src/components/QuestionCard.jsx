import React from "react";
import { useFeedback } from "../context/FeedbackContext";

const QuestionCard = ({ question, index, handleNext, handleBack }) => {
  const { addFeedback } = useFeedback();

  const handleClick = (response) => {
    addFeedback(question.id, response, ""); // ส่งคำตอบไปยัง Context
    handleNext();
  };

  return (
    <div className="question-card p-6 mb-4 bg-white rounded shadow-lg flex flex-col justify-between h-full space-y-6">
      {/* ข้อความคำถาม */}
      <p className="text-xl font-semibold text-center">{question.text}</p>

      {/* ตัวเลือกคำถาม */}
      <div className="flex flex-col space-y-3 mt-4">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className="p-4 w-auto max-w-xs mx-auto border border-gray-300 rounded hover:bg-gray-200 flex justify-center items-center"
            onClick={() => handleClick(idx + 1)} // ส่งคำตอบและไปคำถามถัดไป
          >
            <img
              src={require(`../assets/img/${option}.png`)} // ใช้ภาพ PNG
              alt={`option ${idx + 1}`}
              className="w-20 h-8" // ขนาดของภาพ
            />
          </button>
        ))}
      </div>

      {/* ปุ่ม Back และ Next */}
      <div className="flex justify-between items-center mt-6">
        {/* ปุ่ม Back แสดงเฉพาะเมื่อไม่ใช่คำถามแรก */}
        {index > 0 && (
          <button
            onClick={handleBack}
            className="px-5 py-3 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back
          </button>
        )}
        {/* ปุ่ม Next ที่ขวาสุด */}
        <div className="flex justify-end w-full">
          <button
            onClick={handleNext}
            className="px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {index < 2 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
