import React from "react";
import "../../styles/aboutUsStyles.css";

function AboutUsSection() {
  return (
    <section>
      <div className="ab-grid-wrapper">
        <div className="ab-grid-container">
          <div className="ab-paragraph-container">
            <h1 className="bold-label">About Us</h1>
            <p>
              At Moffat Bay Marina & Lodge, we transcend mere destination
              status, serving as a haven for individuals in search of a seamless
              fusion of aquatic excitement, serenity, and breathtaking scenery.
              Situated snugly along the serene banks of Moffat Bay, our marina
              and lodge provide an unmatched retreat from the everyday hustle.
            </p>
            <p>
              Embark on a journey to Moffat Bay Marina & Lodge and unlock the
              enchantment of the water. Let your adventure commence right here.
            </p>
          </div>
          <div>
            <img src="./AboutUs3.jpg" alt="Image 2" className="ab-image" />
          </div>
          <div>
            <img src="./AboutUs1.jpg" alt="Image 2" className="ab-image" />
          </div>
          <div>
            <img src="./AboutUs.jpg" alt="Image" className="ab-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
