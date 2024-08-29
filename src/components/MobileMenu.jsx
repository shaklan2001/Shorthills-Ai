import React from "react";
import { X } from  "lucide-react";

const MobileMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-[#080808] text-white z-50 transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col space-y-6 p-6">
        {/* Close Button */}
        <button
          className="self-end text-white text-2xl mb-4"
          onClick={closeMenu}
        >
          <X />
        </button>
        {/* Navigation Links */}
        <a
          href="#"
          className="text-white text-lg transition-colors duration-500 hover:text-[#FD6162]"
        >
          AI Studio
        </a>
        <a
          href="#"
          className="text-white text-lg transition-colors duration-500 hover:text-[#FD6162]"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white text-lg transition-colors duration-500 hover:text-[#FD6162]"
        >
          Case Studies
        </a>
        <a
          href="#"
          className="text-white text-lg transition-colors duration-500 hover:text-[#FD6162]"
        >
          Events
        </a>
        <a
          href="#"
          className="text-white text-lg transition-colors duration-500 hover:text-[#FD6162]"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
