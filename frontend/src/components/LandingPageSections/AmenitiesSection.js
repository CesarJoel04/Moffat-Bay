import React from "react";
import "../../styles/amenitiesStyles.css";
import "../../styles/commonStyles.css";

function AmenitiesSection() {
  return (
    <section>
      <div style={{ height: "100px" }}></div>
      <div className="grid-container">
        <div className="small-column">
          <h1 className="bold-label">Amenities</h1>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./2_Pool.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>Pool</h5>
            <p>SUN-SOAKED SERENITY</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./Beach3.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>Beach</h5>
            <p>SEASIDE SPLENDOR</p>
          </div>
        </div>
        <div className="small-column">
          <div className="img-container">
            <img
              src="./SalishSalmon.png"
              alt="Rotated Image"
              className="image"
            />
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./Boat.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>Our Boats</h5>
            <p>SAIL THE MOFFAT COAST</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./Concierge.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>Concierge</h5>
            <p>LET US LOOK AFTER YOU</p>
          </div>
        </div>
        <div className="small-column"></div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./WellBeing1.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>FITNESS</h5>
            <p>WELLBEING IN STYLE</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container">
            <img src="./WellBeing2.jpg" alt="Image 2" />
          </div>
          <div className="grid-item description-label">
            <h5>SPA</h5>
            <p>SELF-CARE</p>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </section>
  );
}

export default AmenitiesSection;
