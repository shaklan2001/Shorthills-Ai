import { useState, useEffect } from "react";
import { AlignJustify } from "lucide-react";
import logo from "../images/logo.png";
import microsoftLogo from "../images/microsoftlogo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 870);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`bg-[#080808] text-white py-4 px-6 flex items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isMobile ? "justify-between" : "justify-around"
      }`}
    >
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <nav className="flex space-x-6">
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
        </nav>
      )}

      {/* Microsoft Logo and Mobile Menu Icon */}
      <div className="flex items-center space-x-4">
        <img src={microsoftLogo} alt="Microsoft" className="h-16 w-auto mt-1" />

        {/* Mobile Menu Icon */}
        {isMobile && (
          <AlignJustify
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu Component */}
      {isMobile && (
        <MobileMenu isOpen={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
