import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feedback from "./pages/Feedback";
import ThankYou from "./pages/ThankYou";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Feedback />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
