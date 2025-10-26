import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { IoAlertCircleOutline } from "react-icons/io5";

const InputField = ({
  label = "",
  id = "",
  type = "text",
  placeholder = "",
  value,
  onChange,
  icon: IconComponent,
  labelIcon: LabelIcon,
  gray,
  asterisk,
  fieldName,
  InputClass,
  error,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <div className={`mb-4 ${fieldName || ""}`}>
      {label && (
        <div className="flex items-center gap-2">
          {LabelIcon && (
            <LabelIcon size={16} className="text-[#323232] -mt-3.5" />
          )}
          <label
            htmlFor={id}
            className="block mb-3.5 whitespace-nowrap text-[#323232] text-sm font-normal rajdhni leading-[100%]"
          >
            {label}
          </label>
          {asterisk && <span className="text-red-500 -ml-1 -mt-2.5">*</span>}
        </div>
      )}

      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          // value={value ?? ""}
          onChange={onChange || (() => {})}
          className={`w-full h-[40px] rajdhani border-2 border-[#e5e7eb]/10 rounded-[8px] px-4 text-sm font-normal text-[#ffffff]/50 placeholder:text-[#fffffff]/50 focus:ring-2 focus:ring-[#ff014f] outline-none ${InputClass}`}
          {...rest}
        />

        {IconComponent && !isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            <IconComponent size={18} color="#25252580" />
          </div>
        )}

        {isPassword && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {showPassword ? (
              <IoEyeOutline size={18} onClick={handleToggle} color="#292D32" />
            ) : (
              <IoEyeOffOutline
                size={18}
                onClick={handleToggle}
                color="#292D32"
              />
            )}
          </div>
        )}
      </div>
      {error && (
        <p className="text-[#d62626] text-[12px] mt-1 flex gap-1">
          <IoAlertCircleOutline className="relative top-0.5" />
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
