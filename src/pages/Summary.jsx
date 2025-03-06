import React from "react";
import { useFeedback } from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { feedback } = useFeedback();
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ส่งข้อมูลที่เก็บใน feedback ไปยังที่ต้องการ (เช่น API หรือฐานข้อมูล)
    // หลังจากนั้นให้ไปที่หน้าขอบคุณ
    navigate("/thank-you");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Summary of Your Responses</h2>
      
      {/* แสดงคำตอบทั้งหมด */}
      <div className="space-y-4">
        {feedback.map((item, index) => (
          <div key={index} className="border-b pb-4">
            <p className="font-medium">Question: {item.questionId}</p>
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
