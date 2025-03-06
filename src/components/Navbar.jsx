import React from 'react';
import { Link } from 'react-router-dom'; // ใช้สำหรับลิงค์ระหว่างหน้า

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">โรงพยาบาลองค์การบริหารส่วนจังหวัดภูเก็ต</h1>
      </div>
    </div>
  );
};

export default Navbar;
