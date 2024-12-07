import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Adjust offset for better alignment
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  // Smooth skew effect
  const skewXRaw = useTransform(scrollVelocity, [-0.5, 0.5], ["15deg", "-15deg"]);
  const skewX = useSpring(skewXRaw, { mass: 2, stiffness: 200, damping: 30 });

  // Smoother x-axis translation
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000]); // Reduced range
  const x = useSpring(xRaw, { mass: 2, stiffness: 200, damping: 30 });

  return (
    <section
      ref={targetRef}
      className="h-[150vh] bg-neutral-50 text-neutral-950" // Reduced height for testing
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          Nothing in this world can take the place of persistence. Talent will
          not; nothing is more common than unsuccessful men with talent. Genius
          will not; unrewarded genius is almost a proverb. Education will not;
          the world is full of educated derelicts. Persistence and determination
          alone are omnipotent. The slogan 'Press On!' has solved and always
          will solve the problems of the human race.
        </motion.p>
      </div>
    </section>
  );
};
