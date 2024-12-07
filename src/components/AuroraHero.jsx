import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiShield, FiGlobe, FiTrendingUp } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-2"
        >
          <FiShield className="text-emerald-400" />
          <span className="inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
            Global Quality Assurance Leader
          </span>
        </motion.div>

        <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Driving Quality, Safety, and Innovation
        </h1>

        <p className="my-6 max-w-2xl text-center text-lg leading-relaxed md:text-xl md:leading-relaxed text-gray-300">
          At BIS, we empower industries and protect consumers through robust standardization practices, creating globally harmonized benchmarks that set new paradigms of excellence.
        </p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          {[
            { 
              icon: FiGlobe, 
              text: "Global Standards" 
            },
            { 
              icon: FiTrendingUp, 
              text: "Continuous Innovation" 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full"
            >
              <item.icon className="text-emerald-400" />
              <span className="text-sm text-gray-300">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-6 py-3 text-gray-50 transition-colors hover:bg-gray-950/50 text-lg"
        >
          Explore Our Standards
          <FiTrendingUp className="ml-2 transition-transform group-hover:rotate-12" />
        </motion.button>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;