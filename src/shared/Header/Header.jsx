import React, { useState, useEffect } from "react";
import { contactLinks } from "./Constant";
import { NavLink } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(()=>{
    let timer;
    if(isOpen){
      timer = setTimeout(()=>setShowCross(true), 300)
    }else{
      setShowCross(false)
    }
    return ()=>clearTimeout(timer)
  })

  return (
    <header className="container mx-auto">
      <div className="hidden lg:flex items-center justify-between py-4">
        <NavLink to={"/"}>
          <span className="text-[#ff014f] text-2xl font-bold rajdhani">Minahil</span>
        </NavLink>

        <nav>
          {contactLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `text-base font-bold mx-1.5 rajdhani pb-2 pt-1.5 px-2 transition-colors duration-300 ease-in-out rounded-sm hover:bg-[#ff014dd9]/20 hover:text-[#ff014f] ${
                  isActive
                    ? "bg-[#ff014dd9]/20 text-[#ff014f]"
                    : "bg-transparent text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div>
          <div className="hidden md:flex items-center gap-2.5">
            {socialIcon.map((item, index) => (
              <a
                key={index}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white social-link text-lg w-10 h-10 flex items-center justify-center border border-[#ffffff10] bg-[#ffffff10] rounded-full"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex lg:hidden items-center justify-between py-4 px-3">
        <NavLink to={"/"}>
          <span className="text-[#ff014f] text-2xl font-bold rajdhani">Minahil</span>
        </NavLink>

        <div className="flex items-center justify-center gap-5">
          <div className="hidden md:flex lg:hidden justify-center gap-2.5">
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="text-white text-3xl cursor-pointer"
          >
            {showCross ? <RxCross2 /> : <RxHamburgerMenu className="text-[#ff014f]"/>}
          </button>
        </div>
      </div>

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
            <NavLink
              key={item.id}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-bold rajdhani pb-2 pt-1.5 px-2 rounded-sm transition-colors duration-300 hover:bg-[#ff014dd9]/20 hover:text-[#ff014f] ${
                  isActive
                    ? "bg-[#ff014dd9]/20 text-[#ff014f]"
                    : "bg-transparent text-white"
                }`
              }
            >
              {item.title}
            </NavLink>
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
                className="text-white social-link text-lg w-10 h-10 flex items-center justify-center border border-[#ffffff10] bg-[#ffffff10] rounded-full"
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
