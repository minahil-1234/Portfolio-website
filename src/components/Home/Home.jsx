import React, { useEffect, useState } from "react";
import bannerImg from "../../assets/banner.png";
import cvFile from "../../assets/Minahil-CV.pdf";
import "./Home.css";
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
      // ⌨️ Typing letters
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text !== "") {
      // ❌ Deleting letters
      timer = setTimeout(() => {
        setText(fullText.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (text === fullText) {
      // ⏸ Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (text === "") {
      // ♻️ Restart typing
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Minahil-CV.pdf";
    link.click();
  };

  return (
    <div className="container">
      <div className="flex justify-center items-center md:flex-nowrap flex-wrap gap-5 h-screen bg-black overflow-hidden">
        <div className=" md:w-1/2 w-full">
          <div className="rajdhani text-5xl font-bold text-white ">
            I am a <br />
            <span className="text-[#ff004f] typewriter">
              {text}
              <span className="cursor">|</span>
            </span>
          </div>
          <p className="text-white text-xl max-w-[500px] mb-5">
            Building elegant, user-friendly interfaces with clean code, modern
            aesthetics, and a focus on performance and accessibility.
          </p>
          <Button className="ml-2" onClick={handleDownloadCV}>
            Download my CV
          </Button>
        </div>
        <div className="relative flex justify-center items-center md:w-1/2 w-full">
          <div className="absolute w-[300px] h-[300px] rounded-full bg-[#ffffff]/60 animate-pulse1"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#0000004d]/85 animate-pulse2"></div>
          <div className="absolute w-[450px] h-[450px] rounded-full bg-[#ffffff]/50 animate-pulse3"></div>
          <img
            src={bannerImg}
            alt="Banner"
            className="relative w-[350px] h-[350px] rounded-full object-cover border-[3px] border-[#111]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
