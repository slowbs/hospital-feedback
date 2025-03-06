import React, { createContext, useState, useContext } from "react";

// สร้าง context
const FeedbackContext = createContext();

// ใช้ provider สำหรับให้ข้อมูลกับ component ต่าง ๆ
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const addFeedback = (questionId, response, comment) => {
    setFeedback((prevFeedback) => [
      ...prevFeedback,
      { questionId, response, comment },
    ]);
  };

  // ฟังก์ชันรีเซ็ต feedback
  const resetFeedback = () => {
    setFeedback([]); // รีเซ็ตค่าของ feedback
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, resetFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

// ใช้ hook เพื่อเข้าถึงข้อมูลจาก context
export const useFeedback = () => useContext(FeedbackContext);
