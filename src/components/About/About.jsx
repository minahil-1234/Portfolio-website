import React from "react";
import AboutExp from "./AboutExp";
import Aboutme from "./Aboutme";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container lg:py-16 pt-5 pb-10 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row lg:flex-nowrap flex-wrap gap-10 md:gap-30 items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AboutExp />
        <Aboutme />
      </motion.div>
    </section>
  );
};

export default About;
