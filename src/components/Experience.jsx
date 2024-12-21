import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a2043 100%)",
        color: "#fff",
        borderRadius: "16px",
        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #4a4a6a", opacity: 0.7 }}
      date={experience.date}
      dateClassName="text-gray-400 font-medium"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        border: "3px solid rgba(255,255,255,0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      }
    >
      <div className="mb-4">
        <h3 className="text-white text-[24px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {experience.title}
        </h3>
        <p className="text-gray-300 text-[16px] font-semibold italic">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none ml-3 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-200 text-[14px] pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full tracking-wider hover:text-white transition-colors duration-300"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div
      className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 backdrop-blur-md shadow-lg border border-gray-500/40 rounded-lg py-16"
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8)",
      }}
    >
      
      <motion.div variants={textVariant()} className="mb-16">
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>
          Types of
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600`}
        >
          BIS Certification Scheme
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#4a4a6a" className="custom-timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");