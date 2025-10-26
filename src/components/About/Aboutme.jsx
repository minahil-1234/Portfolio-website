import React from "react";
import { motion } from "framer-motion";
import { SiMonkeytie } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import SectionDetail from "../SectionDetail/SectionDetail";

const Aboutme = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <SectionDetail
        subHeading="About Me"
        Heading="Crafting Engaging Digital Experiences"
        description="Frontend developer creating high-performance, visually engaging, and user-friendly web interfaces with a focus on clean code and seamless user experience."
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5">
        {/* Card 1 */}
        <motion.div
          className="border-2 border-[#141414] bg-[#141414] px-7 py-[25px] rounded-2xl hover-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-[45px] h-[45px] flex-[0_0_45px] flex items-center justify-center rounded-full bg-[#ff014f] text-xl">
              <SiMonkeytie className="text-white" size={25} />
            </span>
            <h4 className="text-[22px] font-bold text-white rajdhani">
              Creative Interface Design
            </h4>
          </div>
          <p className="text-base font-normal text-[#9f9f9f] leading-7">
            I specialize in turning ideas into pixel-perfect layouts using React, Tailwind, and modern UI principles. Every design element is built with user experience in mind.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="border-2 border-[#141414] bg-[#141414] px-7 py-[25px] rounded-2xl hover-border"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250 }}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-[45px] h-[45px] flex-[0_0_45px] flex items-center justify-center rounded-full bg-[#ff014f] text-xl">
              <FaConnectdevelop className="text-white" size={25} />
            </span>
            <h4 className="text-[22px] font-bold text-white rajdhani">
              Frontend Development
            </h4>
          </div>
          <p className="text-base font-normal text-[#9f9f9f] leading-7">
            From responsive layouts to API-driven dashboards, I ensure seamless interaction and maintainable code using React, JavaScript, and best development practices.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutme;
