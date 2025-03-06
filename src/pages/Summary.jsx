import React from "react";
import { useFeedback } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { feedback } = useFeedback();
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

  // ฟังก์ชันค้นหาคำถามที่ตรงกับ questionId
  const findQuestionText = (questionId) => {
    const question = questions.find(q => q.id === questionId);
    return question ? question.text : "Question not found"; // ถ้าไม่พบคำถามให้แสดงข้อความนี้
  };

  const handleSubmit = () => {
    // ส่งข้อมูลที่เก็บใน feedback ไปยังที่ต้องการ (เช่น API หรือฐานข้อมูล)
    navigate("/thank-you");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Summary of Your Responses</h2>
      
      {/* แสดงคำตอบทั้งหมด */}
      <div className="space-y-4">
        {feedback.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <p className="font-medium">Question: {findQuestionText(item.questionId)}</p>
            <p className="text-gray-700">Answer: {item.response}</p>
            {item.comment && <p className="text-gray-500">Comment: {item.comment}</p>}
          </div>
        ))}
      </div>

      {/* ปุ่ม Submit */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Summary;
