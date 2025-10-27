import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React.js", level: 80 },
  { name: "JavaScript (ES6+)", level: 65 },
  { name: "Tailwind CSS", level: 95 },
  { name: "HTML & CSS", level: 98 },
  { name: "Git / GitHub", level: 80 },
  { name: "API Integration", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="lg:py-16 pt-5 pb-10 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:text-6xl text-4xl font-bold text-center text-white mb-3 rajdhani"
        >
          My <span className="text-[#ff014f]">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base md:max-w-[600px]  mx-auto mb-10 text-center text-[#9f9f9f]"
        >
          Skilled in developing high-quality, responsive web applications using
          React, Tailwind CSS, and API integrations. Experienced in creating
          visually refined UIs with strong attention to usability and
          performance.
        </motion.p>

        {/* Skill Bars */}
        <div className="max-w-3xl mx-auto space-y-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold rubik">
                  {skill.name}
                </span>
                <span className="text-[#ff014f] font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-[#1e1e1e] rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-3 rounded-full bg-[#ff014f]"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
