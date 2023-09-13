import React, { useEffect, useState } from "react";
import image from "./Data";
import "./BackgroundSlider.css";

function BackgroundSlider() {
  const [currentState, setcurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setcurrentState(0);
      } else {
        setcurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);
  const bgImageStyle = {
    backgroundImage: `url(${image[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  const goToNext = (currentState) => {
    setcurrentState(currentState);
  };

  return (
    <div className="container-style">
      <div style={bgImageStyle}></div>

      <div className="description">
        <div>
          <h1>{image[currentState].title}</h1>
        </div>
        <div className="carousel-boullt">
          {image.map((image, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BackgroundSlider;
