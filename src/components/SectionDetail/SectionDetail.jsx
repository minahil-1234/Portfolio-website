import React from "react";

const SectionDetail = ({
  subHeading,
  Heading,
  description,
  className,
  subClass,
  headingClass,
  descClass,
}) => {
  return (
    <div className={`${className}`}>
      <h5
        className={`text-base rubik text-[#ff014f] tracking-wider uppercase mb-3 ${subClass}`}
      >
        {subHeading}
      </h5>
      <h2
        className={`md:text-5xl text-3xl font-bold text-white rajdhani mb-3 ${headingClass}`}
      >
        {Heading}
      </h2>
      <p className={`text-[#9f9f9f] md:leading-8 leading-6 text-lg rubik mb-3 ${descClass}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionDetail;
