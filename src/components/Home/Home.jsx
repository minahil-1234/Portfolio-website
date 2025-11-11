import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cvFile from "../../assets/MinahilCV.pdf";
import Button from "../Button/Button";

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Frontend Developer";
  const typingSpeed = 200;
  const deletingSpeed = 80;

  useEffect(() => {
    let timer;
    if (!isDeleting && text !== fullText) {
      timer = setTimeout(() => setText(fullText.slice(0, text.length + 1)), typingSpeed);
    } else if (isDeleting && text !== "") {
      timer = setTimeout(() => setText(fullText.slice(0, text.length - 1)), deletingSpeed);
    } else if (text === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (text === "") {
      setIsDeleting(false);
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "MinahilCV.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative md:h-screen md:pb-0 md:py-0 py-5 pb-10 flex flex-col items-center justify-center text-white overflow-hidden px-6"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold rajdhani leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span className="text-[#ff014f]">Minahil Afzaal</span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-3xl font-semibold text-gray-300 mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {text}
          <span className="text-[#ff014f]">|</span>
        </motion.h2>

        <motion.p
          className="text-[#9f9f9f] rubik text-lg max-w-[600px] mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I craft modern, interactive, and responsive web interfaces using React and Tailwind CSS — transforming ideas into elegant user experiences.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            onClick={handleDownloadCV}
            className="hover:scale-105 transition-transform duration-300"
          >
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
