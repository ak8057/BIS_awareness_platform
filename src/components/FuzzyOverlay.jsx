import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, CheckCircle, Globe, ArrowUpRight } from "lucide-react";

const AnimatedNumber = ({ target, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2; // Total animation duration in seconds
      const steps = 60; // Number of animation steps
      const increment = target / steps;

      const counter = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + increment;
          return nextCount >= target ? target : nextCount;
        });
      }, (duration * 1000) / steps);

      return () => clearInterval(counter);
    }
  }, [inView, target]);

  return (
    <motion.span
      ref={ref}
      className="text-5xl md:text-6xl font-extrabold text-blue-600"
    >
      {prefix}
      {Math.round(count).toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const FuzzyOverlayExample = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-neutral-50 mb-6"
            >
              Quality Assurance: Our Proven Impact
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-400 max-w-3xl mx-auto"
            >
              Decades of dedication, thousands of certifications, and an
              unwavering commitment to excellence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                target: 19500,
                label: "Standards Formulated Across Industries",
                color: "text-green-600",
              },
              {
                icon: CheckCircle,
                target: 50000,
                label: "Products Certified for Quality Assurance",
                color: "text-blue-600",
              },
              {
                icon: Award,
                target: 70,
                suffix: "+",
                label: "Years of Ensuring Safety and Quality in India",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center shadow-lg group"
              >
                <stat.icon
                  className={`mx-auto mb-6 w-16 h-16 ${stat.color} opacity-70 group-hover:scale-110 transition-transform`}
                />
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix || ""}
                />
                <p className="mt-4 text-lg text-neutral-400">{stat.label}</p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#"
                    className="flex items-center text-neutral-200 hover:text-neutral-50 transition-colors"
                  >
                    Learn More <ArrowUpRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/black-noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

export default FuzzyOverlayExample;
