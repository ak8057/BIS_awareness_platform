import React, { useEffect, useState } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imgs = [
  "/imgs/nature/1.jpg",
  "/imgs/nature/2.jpg",
  "/imgs/nature/3.jpg",
  "/imgs/nature/4.jpg",
  "/imgs/nature/5.jpg",
  "/imgs/nature/6.jpg",
  "/imgs/nature/7.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const navigateNext = () => {
    setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
  };

  const navigatePrev = () => {
    setImgIndex((pv) => (pv === 0 ? imgs.length - 1 : pv - 1));
  };

  return (
    <div className="relative h-[160vh] group overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 py-7">
      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={navigatePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 hidden group-hover:block transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={navigateNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 hidden group-hover:block transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </motion.button>

      {/* Carousel Container */}
      <div className="h-[140vh]">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex h-[150vh] cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>

        {/* Image Info Overlay */}
        <AnimatePresence>
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white"
          >
            <h2 className="text-2xl font-bold mb-2">BIS's Canvas</h2>
            <p className="text-sm opacity-80">
              Explore the BIS World!
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 1 : 0.85,
              filter:
                imgIndex === idx
                  ? "brightness(100%) contrast(100%)"
                  : "brightness(60%) contrast(90%)",
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover shadow-2xl"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-6 flex w-full justify-center gap-3">
      {imgs.map((_, idx) => {
        return (
          <motion.button
            key={idx}
            onClick={() => setImgIndex(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex 
                ? "bg-white scale-125" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
