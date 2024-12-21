import React, { useEffect } from "react";

const App = () => {
  const images = [
    "/images/horizontal_slider_1/unsplash_1.jpg",
    "/images/horizontal_slider_1/unsplash_2.jpg",
    "/images/horizontal_slider_1/unsplash_3.jpg",
    "/images/horizontal_slider_1/unsplash_4.jpg",
    "/images/horizontal_slider_1/unsplash_5.jpg",
    "/images/horizontal_slider_1/unsplash_6.jpg",
    "/images/horizontal_slider_1/unsplash_7.jpg",
    "/images/horizontal_slider_1/unsplash_8.jpg",
    "/images/horizontal_slider_1/unsplash_9.jpg",
    "/images/horizontal_slider_1/unsplash_10.jpg",
  ];

  const ImageSection = ({ images }) => {
    useEffect(() => {
      const LoopingElement = (element, currentTranslation, speed) => {
        let direction = true;
        let scrollTop = 0;
        const metric = 100;

        const lerp = {
          current: currentTranslation,
          target: currentTranslation,
          factor: 0.2,
        };

        const lerpFunc = (current, target, factor) => {
          return current * (1 - factor) + target * factor;
        };

        const goForward = () => {
          lerp.target += speed;
          if (lerp.target > metric) {
            lerp.current -= metric * 2;
            lerp.target -= metric * 2;
          }
        };

        const goBackward = () => {
          lerp.target -= speed;
          if (lerp.target < -metric) {
            lerp.current += metric * 2;
            lerp.target += metric * 2;
          }
        };

        const animate = () => {
          if (direction) {
            goForward();
          } else {
            goBackward();
          }
          lerp.current = lerpFunc(lerp.current, lerp.target, lerp.factor);
          element.style.transform = `translateX(${lerp.current}%)`;
        };

        const render = () => {
          animate();
          requestAnimationFrame(render);
        };

        const onScroll = () => {
          const currentScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          direction = currentScroll > scrollTop;
          scrollTop = currentScroll <= 0 ? 0 : currentScroll;
          lerp.target += direction ? speed * 5 : -speed * 5;
        };

        window.addEventListener("scroll", onScroll);
        render();
      };

      const wrappers = document.querySelectorAll(".images-wrapper");
      LoopingElement(wrappers[0], 0, 0.1);
      LoopingElement(wrappers[1], -100, 0.1);

      return () => {
        window.removeEventListener("scroll", null);
      };
    }, []);

    return (
      <section className="image-section">
        <div className="second-loop-container">
          <div className="images-wrapper">
            {images.slice(0, 5).map((image, i) => (
              <div className="image-container" key={i}>
                <img src={image} alt={`image-${i}`} className="image-class" />
              </div>
            ))}
          </div>
          <div className="images-wrapper">
            {images.slice(5).map((image, i) => (
              <div className="image-container" key={i + 5}>
                <img
                  src={image}
                  alt={`image-${i + 5}`}
                  className="image-class"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <ImageSection images={images} />
    </div>
  );
};

export default App;
