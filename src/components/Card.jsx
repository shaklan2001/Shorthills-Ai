import React from "react";

const Card = ({ imageSrc, altText, title, highlightedText }) => {
  // Split the title based on the highlighted text
  const parts = title.split(highlightedText);

  return (
    <div className="bg-[#1B1D1E] text-white pr-8 pl-8 pb-8 border-[1.2px] border-black rounded-xl shadow-md w-[320px] h-[340px] mx-4 my-2 transform transition-transform duration-300 hover:scale-110">
      {/* Image Section */}
      <div className="flex justify-center mb-16 bg-[#202124] pt-10 pb-10 mr-2 ml-2 rounded-lg">
        <img src={imageSrc} alt={altText} className="h-16 w-auto" />
      </div>
      {/* Text Section */}
      <div className="text-center pt-4">
        <p className="font-semibold text-md md:text-[22px] mt-4">
          {parts[0]}<span style={{ color: '#FD6162' }}>{highlightedText}</span>{parts[1]}
        </p>
      </div>
    </div>
  );
};

export default Card;


