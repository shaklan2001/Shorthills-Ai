import React from "react";

const Expertise = ({ title, logos }) => {
  return (
    <div className="flex items-center justify-center w-full mb-20 px-4 md:pl-20">
      <div className="flex items-center w-full">
        {/* Text Part */}
        <div className="flex-shrink-0 w-[190px]">
          <h3 className="text-l md:text-xl font-light font-poppins leading-tight break-words">
            {title}
          </h3>
        </div>

        {/* Vertical Line */}
        <div className="border-l-[1px] border-black m-1 md:mx-4 h-[100px]"></div>

        {/* Image Part */}
        <div className="flex flex-wrap items-center justify-start md:justify-around flex-grow pl-2 md:pl-4">
          {logos.map((logo) => (
            <img
              src={logo.url}
              alt={logo.alt}
              key={logo.id}
              className="h-8 md:h-10 w-auto ml-2 my-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
