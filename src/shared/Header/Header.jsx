import React, { useState, useEffect } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import "./Header.css";

const socialIcon = [
  {
    icon: <TiSocialLinkedin />,
    to: "https://www.linkedin.com/in/minahil-afzaal-422b622b7",
  },
  {
    icon: <FaGithub />,
    to: "https://github.com/minahil-1234",
  },
  {
    icon: <MdOutlineMarkEmailRead />,
    to: "mailto:afzaalminahil0@gmail.com",
  },
];

const contactLinks = [
  { id: "home", title: "Home", to: "#home" },
  { id: "about", title: "About", to: "#about" },
  { id: "services", title: "Services", to: "#services" },
  { id: "skills", title: "Skills", to: "#skills" },
  { id: "portfolio", title: "Portfolio", to: "#portfolio" },
  { id: "resume", title: "Resume", to: "#resume" },
  { id: "contact", title: "Contact", to: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Show cross icon with delay
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => setShowCross(true), 300);
    } else {
      setShowCross(false);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  // 🔥 Detect visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // adjust sensitivity
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <header className="container mx-auto">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between py-4 fixed w-full bg-black z-99 pr-20">
        <a href="#home">
          <span className="text-[#ff014f] text-2xl font-bold rajdhani">
            Minahil
          </span>
        </a>

        {/* Navigation Links */}
        <nav>
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.to}
              className={`text-base font-bold mx-1.5 rajdhani pb-2 pt-1.5 px-2 transition-colors duration-300 ease-in-out rounded-sm hover:bg-[#ff014dd9]/20 hover:text-[#ff014f] ${
                activeSection === item.id
                  ? "bg-[#ff014dd9]/20 text-[#ff014f]"
                  : "text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-2.5">
          {socialIcon.map((item, index) => (
            <a
              key={index}
              href={item.to}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-white text-lg w-10 h-10 flex items-center justify-center border border-[#ffffff10] bg-[#ffffff10] rounded-full"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between py-4 px-3">
        <a href="#home">
          <span className="text-[#ff014f] text-2xl font-bold rajdhani">
            Minahil
          </span>
        </a>

        <div className="flex items-center justify-center gap-5">
          <div className="hidden md:flex lg:hidden justify-center gap-2.5">
            {socialIcon.map((item, index) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-white text-lg w-10 h-10 flex items-center justify-center border border-[#ffffff10] bg-[#ffffff10] rounded-full hover:text-[#ff014f] transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-white text-3xl cursor-pointer"
          >
            {showCross ? (
              <RxCross2 />
            ) : (
              <RxHamburgerMenu className="text-[#ff014f]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#0f0f0f] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-[#ffffff1a]">
          <span className="text-[#ff014f] text-2xl font-bold">Minahil</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl cursor-pointer"
          >
            <RxCross2 />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.to}
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold rajdhani pb-2 pt-1.5 px-2 rounded-sm transition-colors duration-300 hover:bg-[#ff014dd9]/20 hover:text-[#ff014f] ${
                activeSection === item.id
                  ? "bg-[#ff014dd9]/20 text-[#ff014f]"
                  : "text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="px-4 mt-5">
          <h6 className="text-white font-semibold mb-2.5">Social Links</h6>
          <div className="flex items-center gap-3">
            {socialIcon.map((item, index) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg w-10 h-10 flex items-center justify-center border border-[#ffffff10] bg-[#ffffff10] rounded-full"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
