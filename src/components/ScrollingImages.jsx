import React, { useEffect } from "react";

const ScrollingImages = () => {
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

    const items = document.querySelectorAll(".item");
    LoopingElement(items[0], 0, 0.08);
    LoopingElement(items[1], -100, 0.08);

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="loop-container">
        <div className="item special-font hero-heading">
          Empowering ~ Safer ~ Smarter ~ Sustainable ~ India &nbsp;
        </div>
        <div className="item special-font hero-heading">
          Let's Build ~ Trust ~ Excellence.&nbsp;
        </div>
      </div>
    </section>
  );
};

export default ScrollingImages;
