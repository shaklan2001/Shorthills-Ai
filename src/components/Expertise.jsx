import React from 'react';

const Expertise = ({ title, logos }) => {
  return (
    <div className="flex items-center justify-center w-full h-[100px] mb-20 ml-24">
      <div className="flex items-center w-full">
        {/* Text Part */}
        <div className="flex-shrink-0 mr-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* Vertical Line */}
        <div className="border border-black mx-4 h-[100px]"></div>

        {/* Image Part */}
        <div className="flex space-x-12 flex-grow overflow-x-auto pl-12">
          {logos.map((logo) => (
            <img src={logo.url} alt={logo.alt} key={logo.id} className="h-12" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;


