import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapSlider = () => {
 useEffect(() => {
   const track = document.querySelector(".gsap__track");
   const container = document.querySelector(".gsap__bl");
   const trackWidth = track.offsetWidth;
   const viewportWidth = container.offsetWidth;
   const scrollableDistance = trackWidth - viewportWidth;

   // Scroll animation for the slider
   const sliderAnimation = gsap.to(track, {
     x: `-${scrollableDistance}px`, // Move the track left by the scrollable distance
     ease: "none", // Linear animation for smooth scrolling
     scrollTrigger: {
       trigger: ".gsap_slider", // Pin the slider section
       start: "top top", // Start pinning when the section reaches the top of the viewport
       end: `+=${scrollableDistance}`, // End after the full scrollable distance
       pin: true, // Pin the slider section
       scrub: 1, // Smooth animation scrubbing
       pinSpacing: true, // Keep space reserved for the pinned section
       markers: false, // Debug markers for development
     },
   });

   // Resize listener to adjust animation on window resize
   const handleResize = () => {
     sliderAnimation.kill(); // Kill the existing animation
     window.location.reload(); // Reload the page to recalculate dimensions
   };

   window.addEventListener("resize", handleResize);

   return () => {
     window.removeEventListener("resize", handleResize);
     sliderAnimation.kill(); // Clean up animation on unmount
   };
 }, []);
  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    imgSrc: `img/bis_gallery_img/img${i + 1}.png`,
  }));

  return (
    <section className="section-slider gsap_slider  py-8">
      <div className="h-[80vh]">
        <div className="gsap__bl w-full h-full">
          <div className="gsap__inner flex h-[85%]">
            <div className="gsap__track flex gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="gsap__item flex-shrink-0 w-[750px] bg-black relative mr-indent"
                >
                  <span className="absolute text-accent top-4 left-10 text-5xl opacity-50">
                    # {String(item.id).padStart(2, "0")}
                  </span>
                  <img
                    src={item.imgSrc}
                    alt={`Slide ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-0 left-0 w-full h-full opacity-40 blur-md scale-125 z-[-1]">
                    <img
                      src={item.imgSrc}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GsapSlider;
