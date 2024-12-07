import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { FiGlobe, FiShield, FiTrendingUp, FiTarget } from "react-icons/fi";
import { pointsInner, pointsOuter } from "../utils/utils.js";
import * as THREE from "three";

const ParticleRing = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-10 px-0 ">
      <div className="max-w-[90rem] rounded-2xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* 3D Visualization Container */}
        <div className="h-[600px]  w-full relative">
          <Canvas
            camera={{
              position: [10, -7.5, -5],
            }}
            style={{ height: "100%", width: "100%" }}
            className="bg-transparent"
          >
            <Suspense fallback={null}>
              <OrbitControls
                maxDistance={20}
                minDistance={10}
                enablePan={false}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <PointCircle />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-slate-900/30" />
        </div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <header>
            <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              BIS Interconnected Network
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              A comprehensive ecosystem of standards, innovation, and quality
              assurance.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {networkFeatures.map((feature, index) => (
              <NetworkFeatureCard
                key={index}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Explore Our Network
              <FiGlobe className="ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const NetworkFeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all group">
      <div className="mb-4 p-3 bg-emerald-500/20 rounded-lg inline-block">
        <Icon
          className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
          size={24}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point, idx) => (
        <Point
          key={point.idx}
          position={point.position}
          color={point.color}
          type={idx % 2 === 0 ? "industry" : "certification"}
        />
      ))}
      {pointsOuter.map((point, idx) => (
        <Point
          key={point.idx}
          position={point.position}
          color={point.color}
          type={idx % 3 === 0 ? "product" : "standard"}
        />
      ))}
    </group>
  );
};

const Point = ({ position, color, type }) => {
  const iconTextures = {
    industry: "/images/icons/industry-icon.png",
    // Add other icon paths as needed
  };

  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
      {type && iconTextures[type] && (
        <sprite>
          <spriteMaterial
            map={new THREE.TextureLoader().load(iconTextures[type])}
            sizeAttenuation
          />
        </sprite>
      )}
    </Sphere>
  );
};

const networkFeatures = [
  {
    Icon: FiShield,
    title: "Robust Protection",
    description:
      "Comprehensive standards that safeguard consumer interests and industrial integrity.",
  },
  {
    Icon: FiTrendingUp,
    title: "Continuous Innovation",
    description:
      "Adaptive frameworks that drive technological advancement and quality improvement.",
  },
  {
    Icon: FiTarget,
    title: "Precise Certification",
    description:
      "Meticulous evaluation processes ensuring highest quality and reliability.",
  },
  {
    Icon: FiGlobe,
    title: "Global Connectivity",
    description:
      "Bridging industries, technologies, and markets through standardized excellence.",
  },
];

export default ParticleRing;
