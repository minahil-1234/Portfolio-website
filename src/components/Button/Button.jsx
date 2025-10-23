import React from "react";

const Button = ({
  children,
  prefixImg,
  suffixImg,
  variant = "defaultBtn",
  className = "",
  onClick,
  type = "button",
  ...rest
}) => {
  const baseStyles =
    "relative overflow-hidden whitespace-nowrap px-8 py-3 rounded-[8px] font-semibold text-base transition-all duration-300 flex items-center justify-center cursor-pointer group";

  const variants = {
    defaultBtn:
      "bg-gradient-to-r from-[#ff014f] via-[#ff4d6d] to-[#ff014f] text-white shadow-md hover:shadow-[#ff014f]/60 hover:scale-[1.05]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {/* ✨ Shine Animation */}
      <span className="absolute inset-0 from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.2s] ease-in-out" />

      {/* 💫 Glowing Border on Hover */}
      <span className="absolute inset-0 rounded-[8px] ring-2 ring-transparent group-hover:ring-[#ff4d6d]/50 transition-all duration-700 ease-in-out"></span>

      <span className="relative flex items-center gap-2">
        {prefixImg && prefixImg}
        <span className="transition-transform duration-500 group-hover:translate-y-[-2px]">
          {children}
        </span>
        {suffixImg && suffixImg}
      </span>
    </button>
  );
};

export default Button;
