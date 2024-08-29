import { useEffect } from 'react';
import { AlignJustify } from 'lucide-react';

import logo from '../images/logo.png';
import microsoftLogo from '../images/microsoftlogo.png';

const Header = () => {
    return (
        <header className="bg-[#080808] text-white py-4 px-6 flex justify-around items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-16 w-auto" />
            </div>
            {/* Navigation Links */}    
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
    
            
            <div className="text-right">
                <img src={microsoftLogo} alt="Microsoft" className="h-16 w-auto mt-1" />
            </div>
        </header>
    );
};

export default Header;
