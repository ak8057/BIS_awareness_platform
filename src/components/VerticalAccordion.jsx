import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Explore Our Key Areas
          </h2>
          <p className="text-lg text-gray-400">
            Discover the fundamental areas that drive BIS standards and
            services, ensuring safety, quality, and trust for everyone.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row h-[100vh] lg:h-[450px] w-full overflow-hidden rounded-xl shadow-lg border border-gray-700">
          {items.map((item) => {
            return (
              <Panel
                key={item.id}
                open={open}
                setOpen={setOpen}
                id={item.id}
                Icon={item.Icon}
                title={item.title}
                imgSrc={item.imgSrc}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const isOpen = open === id;

  return (
    <div className="flex flex-1 flex-col relative group">
      {/* Accordion Tab */}
      <button
        className={`flex items-center justify-between gap-4 p-5 transition-colors ${
          isOpen
            ? "bg-indigo-700 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
        onClick={() => setOpen(id)}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg text-white">
            <Icon size={24} />
          </div>
          <span className="text-lg font-semibold">{title}</span>
        </div>
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Content Section */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <div className="p-6 h-[23rem] bg-black/60 backdrop-blur-sm text-gray-100">
              <p>{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VerticalAccordion;

const items = [
  {
    id: 1,
    title: "Standardization",
    Icon: FiBarChart,
    imgSrc: "/images/vertical_accordian/standardization.jpg",
    description:
      "BIS ensures safety and quality by setting robust standards across various industries.",
  },
  {
    id: 2,
    title: "Certification",
    Icon: FiDollarSign,
    imgSrc: "/images/vertical_accordian/certification.jpg",
    description:
      "Certifications symbolize quality and compliance with BIS standards for trusted products and services.",
  },
  {
    id: 3,
    title: "Consumer Awareness",
    Icon: FiBell,
    imgSrc: "/images/vertical_accordian/consumer-awareness.jpg",
    description:
      "Learn how to identify genuine BIS-certified products and ensure consumer rights.",
  },
  {
    id: 4,
    title: "Testing & Research",
    Icon: FiPlay,
    imgSrc: "/images/vertical_accordian/testing-research.jpg",
    description:
      "BIS conducts rigorous testing and research to validate product quality and safety.",
  },
];
