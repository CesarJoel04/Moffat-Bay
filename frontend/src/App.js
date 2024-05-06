import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Menu from "./components/menu";
import ReservationPage from "./components/ReservationPage";
import ReservationSummaryPage from "./components/ReservationSummaryPage";
import AboutUsPage from "./components/AboutUsPage"; 
import ReservationLookUpPage from "./components/ReservationLookUpPage";
import AttractionsPage from "./components/AttractionsPage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Menu />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/attractions" element={<AttractionsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/reservation-summary" element={<ReservationSummaryPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/reservation-lookup" element={<ReservationLookUpPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
