import React from "react";
import { motion } from "framer-motion";
import SectionDetail from "../SectionDetail/SectionDetail";

const servicesData = [
  {
    no: "01.",
    title: "Frontend Development",
    desc: "Building responsive and interactive web interfaces using React, Tailwind CSS, and Bootstrap — with a focus on performance, accessibility, and clean UI design.",
  },
  {
    no: "02.",
    title: "Custom Dashboards",
    desc: "Developing dynamic admin dashboards in React with authentication, charts, data tables, and API-driven workflows for better analytics and management.",
  },
  {
    no: "03.",
    title: "API Integration",
    desc: "Connecting applications to RESTful APIs and external data sources, ensuring secure data flow and smooth interaction between frontend and backend systems.",
  },
  {
    no: "04.",
    title: "Version Control & Deployment",
    desc: "Managing projects efficiently using Git and GitHub for version control, collaborating on code, and deploying optimized builds to production environments.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // stagger cards
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container">
        {/* Heading Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <SectionDetail
            className="max-w-[700px] mx-auto text-center"
            subHeading="Latest Service"
            Heading="Empowering Digital Experiences Through Code"
            description="Transforming ideas into powerful, scalable web applications using modern technologies like React, Tailwind CSS, and RESTful APIs. I focus on crafting clean, efficient, and user-centered solutions that bring both creativity and functionality to life."
          />
        </motion.div>

        {/* Cards */}
        <div className="flex items-center w-full flex-wrap gap-5 justify-center">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#141414] w-[48%] border hover-border border-transparent rounded-[20px] px-9 py-10"
            >
              <div className="flex">
                <h2 className="text-2xl text-white rajdhani font-bold mb-4 mr-3">
                  {item.no}
                </h2>
                <h2 className="text-2xl text-white rajdhani font-bold mb-4">
                  {item.title}
                </h2>
              </div>
              <p className="text-base text-[#9d9d9d] rubik font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
