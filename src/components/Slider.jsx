import React from "react";
import PropTypes from "prop-types";

const Slider = ({ type, reverse }) => {
  // Generate images based on the type prop
  const images = Array.from(
    { length: type === "slider1" ? 10 : 9 },
    (_, i) => `/images/slider_images/${type}_${i + 1}.png`
  );

  return (
    <div
      className={`slider ${
        reverse ? "reverse" : ""
      } w-full h-[var(--height)] overflow-hidden`}
      style={{
        "--width": type === "slider1" ? "100px" : "200px",
        "--height": type === "slider1" ? "50px" : "200px",
        "--quantity": images.length,
      }}
    >
      <div className="list flex relative min-w-[calc(var(--width)*var(--quantity))]">
        {images.map((image, index) => (
          <div
            key={index}
            className="item absolute w-[var(--width)] h-[var(--height)]"
            style={{
              "--position": index + 1,
              animationDelay: `calc((10s / var(--quantity)) * (var(--position) - 1) - 10s)`,
            }}
          >
            <img
              src={image}
              alt={`Slider ${type} - Image ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  type: PropTypes.oneOf(["slider1", "slider2"]).isRequired,
  reverse: PropTypes.bool,
};

Slider.defaultProps = {
  reverse: false,
};

export default Slider;
