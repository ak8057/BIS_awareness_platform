import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer, FiCheck, FiTrendingUp, FiShield } from "react-icons/fi";



export  const Example = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/imgs/active/1.jpg",
        "/imgs/active/2.jpg",
        "/imgs/active/3.jpg",
        "/imgs/active/4.jpg",
        "/imgs/active/5.jpg",
        "/imgs/active/6.jpg",
        "/imgs/active/7.jpg",
        "/imgs/active/8.jpg",
        "/imgs/active/9.jpg",
        "/imgs/active/10.jpg",
        "/imgs/active/11.jpg",
        "/imgs/active/12.jpg",
        "/imgs/active/13.jpg",
        "/imgs/active/14.jpg",
        "/imgs/active/15.jpg",
        "/imgs/active/16.jpg",
      ]}
    >
      <div className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main Content Container */}
        <div className="relative container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FiMousePointer className="text-blue-600 w-12 h-12 transform -rotate-12" />
              <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                Precision Quality Assurance
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Elevate your product's quality with our meticulous testing and innovative QA strategies. We transform potential risks into opportunities for excellence.
            </p>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: FiCheck, 
                  title: "Comprehensive Testing", 
                  description: "End-to-end quality validation across all platforms." 
                },
                { 
                  icon: FiTrendingUp, 
                  title: "Continuous Improvement", 
                  description: "Data-driven insights for constant optimization." 
                },
                { 
                  icon: FiShield, 
                  title: "Risk Mitigation", 
                  description: "Proactive identification of potential issues." 
                }
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-soft">
                  <Icon className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-colors">
                Learn More
              </button>
              
            </div>
          </div>

          {/* Right Content - Decorative Element */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full aspect-square bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex justify-center items-center">
              <div className="w-full h-full bg-cover bg-center rounded-2xl" 
                   style={{backgroundImage: "url('/imgs/active/entrance.png')"}}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-gray-500 text-sm">
          © 2024 Quality Assurance Experts. All Rights Reserved.
        </div>
      </div>
    </MouseImageTrail>
  );
};
const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden z-0"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
