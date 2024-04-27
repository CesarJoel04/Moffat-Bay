import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Menu from "./components/menu";
import ReservationPage from "./components/ReservationPage";
import ReservationSummaryPage from "./components/ReservationSummaryPage";
import AboutUsPage from "./components/AboutUsPage"; // Import the new component
import ContactUsPage from "./components/ContactUsPage"; // Import the Contact Us page component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/reservation-summary" element={<ReservationSummaryPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} /> {/* New route for Contact Us page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
