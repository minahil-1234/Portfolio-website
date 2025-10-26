import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import aboutus from "../../assets/aboutus.png";
import departed from "../../assets/departed.jpg";
import dashboard from "../../assets/dashboard.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "A Showcase of My Projects",
    category: "Development",
    image: aboutus,
    link: "https://skypassholiday.com/",
  },
  {
    id: 2,
    title: "Creative Web Experience",
    category: "UI/UX Design",
    image: departed,
    link: "https://phpstack-1250693-5581655.cloudwaysapps.com/home",
  },
  {
    id: 3,
    title: "Interactive Dashboard",
    category: "Frontend Development",
    image: dashboard,
    link: "https://phpstack-1250693-5581655.cloudwaysapps.com/web-dashboard",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.2, ease: "easeOut" },
  }),
};

const PortfolioCard = () => {
  return (
    <div className="flex justify-center gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          className="relative w-[380px] h-[380px] rounded-[20px] overflow-hidden group cursor-pointer shadow-lg shadow-black/20"
        >
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#ff014f] to-[#9e0037]/40 opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

          {/* Text & Button */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">
            <p className="text-base mb-1 font-rajdhani tracking-wider">
              {project.category}
            </p>
            <h3 className="text-3xl font-bold leading-tight">
              {project.title}
            </h3>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.link, "_blank")}
              className="absolute bottom-0 mb-5 right-5 bg-white/70 text-[#ff014f] hover:bg-[#ff014f] hover:text-white p-3 rounded-lg transition"
            >
              <FiArrowUpRight size={28} />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioCard;
