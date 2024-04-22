import React from "react";
import "../styles/commonStyles.css"; // Import the common CSS file
import HeroSection from "./LandingPageSections/HeroSection.js";
import RoomsSection from "./LandingPageSections/RoomsSection.js";
import AboutUsSection from "./LandingPageSections/AboutUsSection.js";
import AmenitiesSection from "./LandingPageSections/AmenitiesSection.js";
import FooterSection from "./LandingPageSections/FooterSection.js";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <HeroSection />
      <RoomsSection />
      <AboutUsSection />
      <AmenitiesSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
