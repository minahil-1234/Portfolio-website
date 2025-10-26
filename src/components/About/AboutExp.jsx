import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { GiSkills } from "react-icons/gi";

const AboutExp = () => {
  return (
    <motion.div
      className="AboutMe"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="ml-5 md:ml-28">
        {/* Experience Box */}
        <motion.div
          className="w-[365px] h-[378px] border border-[#ffffff0d] bg-[#1616164d] rounded-xl px-15 py-24 flex items-center justify-center mb-5"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h2 className="text-[90px] rubik text-white leading-[1] text-center">
            1.5+
            <br />
            <span className="mt-2 text-5xl font-bold rajdhani text-white block">
              years of experience
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="w-[365px] h-[161px] rounded-xl border border-[#ffffff0d] bg-[#1616164d] p-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="flex items-center justify-between">
            <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center border-2 border-[#ffffff14] text-[#ff014f] text-4xl">
              <GiSkills />
            </div>
            <div className="text-[27px] font-bold rubik text-white leading-tight ">
              FrontEnd <br /> Developer <br />
              <span className="text-lg rajdhani font-normal">10+ Projects</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutExp;
