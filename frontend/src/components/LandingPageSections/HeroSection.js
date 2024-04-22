import React from "react";
import Carousel from "./Carousel";

const slides = [
  {
    src: "./Main1.jpg",
    alt: "Image 1 for carousel",
  },
  {
    src: "./Main2.jpeg",
    alt: "Image 2 for carousel",
  },
  {
    src: "./Main3.jpg",
    alt: "Image 3 for carousel",
  },
  {
    src: "./Main4.jpg",
    alt: "Image 4 for carousel",
  },
];
const HeroSection = () => {
  return (
    <div className="hero">
      <Carousel data={slides} />
    </div>
  );
};

export default HeroSection;
