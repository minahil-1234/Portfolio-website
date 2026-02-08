import React from "react";
import { motion } from "framer-motion";
import SectionDetail from "../SectionDetail/SectionDetail";

const educationData = [
  {
    year: "2018–2020",
    title: "Matriculation",
    desc: "Completed Matric with a strong foundation in Computer Science, Mathematics, and analytical problem-solving skills.",
  },
  {
    year: "2020–2021",
    title: "Intermediate (F.Sc Pre-Engineering)",
    desc: "Focused on core science and logic-building subjects — strengthened understanding of programming fundamentals and structure.",
  },
  {
    year: "2022–2026",
    title: "Bachelor's in Computer Science",
    desc: "Pursuing advanced studies in software development, UI/UX, web technologies, and API integration — building full-stack projects using React and Node.js.",
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Resume = () => {
  return (
    <section className="lg:py-16 pt-5 pb-10" id="resume">
      <div className="container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <SectionDetail
            className="max-w-[500px] mx-auto text-center"
            subHeading="Education"
            Heading="My Academic Journey"
            description="A progressive journey through key stages of education, developing technical expertise and creative problem-solving skills."
          />
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-10"
        >
          <motion.h2
            variants={cardVariant}
            className="rajdhani text-[32px] lg:mb-6 mb-0 text-white font-bold"
          >
            Education
          </motion.h2>

          <motion.div
            variants={containerVariant}
            className="flex items-center w-full flex-wrap gap-5"
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="bg-[#141414] md:w-[48%] w-full border hover-border border-transparent rounded-[20px] md:px-9 px-5 md:py-10 py-6"
              >
                <h2 className="text-xl text-[#ff014f] rajdhani font-semibold mb-2">
                  {item.year}
                </h2>
                <h2 className="text-2xl text-white rajdhani font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-base text-[#9d9d9d] rubik font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="rajdhani text-[32px] mb-2 text-white font-bold">
            Experience
          </h2>
          <div className="bg-[#141414] border hover-border border-transparent rounded-[20px] md:px-9 px-5 md:py-10 py-6">
            <p className="text-base rubik font-normal text-[#9f9f9f]">
              During my role as a Frontend Developer at Yodo, I contributed to
              designing and developing custom modules and responsive user
              interfaces within the Odoo ERP environment. My focus was on
              creating smooth, interactive web experiences using modern frontend
              technologies like React.js, Tailwind CSS, and JavaScript, while
              integrating them with Yodo’s backend framework.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
