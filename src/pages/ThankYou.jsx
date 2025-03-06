import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000); // ไปยังหน้าคำถามแรกหลังจาก 2 วินาที

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl">Thank you for your feedback!</h1>
      <p>We appreciate your time and effort in helping us improve.</p>
    </div>
  );
};

export default ThankYou;
