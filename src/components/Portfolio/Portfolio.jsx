import React from "react";
import SectionDetail from "../SectionDetail/SectionDetail";
import PortfolioCard from "./PortfolioCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="lg:py-16 pt-5 pb-10 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <SectionDetail
            className="max-w-[900px] mx-auto text-center"
            descClass="max-w-[500px] mx-auto"
            subHeading="Latest Portfolio"
            Heading="Transforming Ideas into Exceptional"
            description="Building creative, high-performance, and visually engaging web solutions — where every project reflects clean design, responsive development, and attention to detail."
          />
        </motion.div>

        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
